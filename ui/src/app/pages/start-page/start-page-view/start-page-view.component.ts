import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CreateCompanyComponent } from '../../../components/dialogs/create-company/create-company.component';
import { ICompany } from '../../../interface/company.interface';
import { CreatePackageComponent } from '../../../components/dialogs/create-package/create-package.component';
import { SessionStorageService } from '../../../service/localStorage.service';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { UploadDocMessageComponent } from '../../../components/upload-doc-message/upload-doc-message.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { ListCompaniesComponent } from '../../../components/list-companies/list-companies.component';
import { ListPackagesComponent } from '../../../components/list-packages/list-packages.component';
import { IDoc } from '../../../interface/docs.interface';
import { ListDocumentsComponent } from '../../../components/list-documents/list-documents.component';
import { TruncatePipe } from '../../../pipes/truncate-doc.pipe';

@Component({
  selector: 'app-start-page-view',
  standalone: true,
  imports: [
    CommonModule,
    NzStepsModule,
    NzTableModule,
    NzButtonModule,
    NzLayoutModule,
    CreateCompanyComponent,
    CreatePackageComponent,
    NzHeaderComponent,
    NzFlexModule,
    UploadDocMessageComponent,
    NzUploadModule,
    NzToolTipModule,
    ListCompaniesComponent,
    ListPackagesComponent,
    ListDocumentsComponent,
    TruncatePipe,
  ],
  templateUrl: './start-page-view.component.html',
  styleUrl: './start-page-view.component.scss',
})
export class StartPageViewComponent implements OnInit, OnChanges {
  constructor(private localStorage: SessionStorageService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isUploadDoc']?.currentValue) {
      this.isUploadDoc = changes['isUploadDoc'].currentValue;
    }
  }

  @Output() createNewCompany = new EventEmitter<string>();
  @Output() selectCompany = new EventEmitter<ICompany>();
  @Output() selectPackage = new EventEmitter<IResponseAddPackage>();

  @Output() createNewPackage = new EventEmitter<{
    name: string;
    description: string;
  }>();

  @Output() sendDocs = new EventEmitter<any>();
  @Output() deleteCompany = new EventEmitter<any>();
  @Output() deletePackage = new EventEmitter<any>();
  @Output() deleteDocument = new EventEmitter<any>();

  @Input() currentCompany: ICompany | null;
  @Input() companiesList: ICompany[] | null;
  @Input() packagesList: IResponseAddPackage[] | null;
  @Input() newPackage: IResponseAddPackage | null;
  @Input() documentsList: IDoc[] | null;
  @Input() isUploadDoc: boolean | null;

  companyName: string | null = null;
  packageName: string | null = null;

  current = 0;

  index = 1;

  status = 'process';

  filename: string | null;

  formData = new FormData();

  ngOnInit(): void {
    this.companyName = this.localStorage.getCompanyName();
    if (this.companyName || this.currentCompany?.id) {
      this.current = 1;
      this.index = 2;
    }

    this.packageName = this.localStorage.getPackageName();
    if (this.packageName !== null || this.newPackage?.name) {
      this.current = 2;
      this.index = 3;
    }
  }

  @ViewChild('inputLetter') inputLetter!: ElementRef<HTMLInputElement>;

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }

  deleteInfoItem(typeInfo: string) {
    switch (typeInfo) {
      case 'company':
        this.currentCompany = null;
        this.companyName = null;
        this.localStorage.clean();
        this.clearPackageInfo();
        break;
      case 'package':
        this.clearPackageInfo();
        break;
      case 'letter':
        this.filename = null;
        this.formData.delete('file');
        this.isUploadDoc = false;
        break;
    }
  }

  public addPackageDoc(ev: any) {
    this.isUploadDoc = false;
    const file = ev.target.files[0];

    if (file) {
      this.formData = new FormData();
      this.formData.append('file', file, file.name);
      this.filename = file.name;
    } else {
      console.error('No file selected');
    }
  }

  downloadDocs() {
    this.sendDocs.emit(this.formData);
    this.filename = null;
    this.formData.delete('file');
    this.isUploadDoc = false;
  }

  private clearPackageInfo() {
    this.localStorage.deletePackage();
    this.newPackage = null;
    this.packageName = null;
    this.filename = null;
    this.formData.delete('file');
    this.isUploadDoc = false;
  }
}
