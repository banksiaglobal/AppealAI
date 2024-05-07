import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CreateCompanyComponent } from '../../../components/dialogs/create-company/create-company.component';
import { ICompany } from '../../../interface/company.interface';
import { CreatePackageComponent } from '../../../components/dialogs/create-package/create-package.component';
import { SessionStorageService } from '../../../service/localStorage.service';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFlexModule } from 'ng-zorro-antd/flex';

@Component({
  selector: 'app-start-page-view',
  standalone: true,
  imports: [
    CommonModule,
    NzStepsModule,
    NzButtonModule,
    NzLayoutModule,
    CreateCompanyComponent,
    CreatePackageComponent,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
  ],
  templateUrl: './start-page-view.component.html',
  styleUrl: './start-page-view.component.scss',
})
export class StartPageViewComponent implements OnInit {
  constructor(private localStorage: SessionStorageService) {}

  companyName: string | null = null;
  packageName: string | null = null;

  ngOnInit(): void {
    this.companyName = this.localStorage.getCompanyName();
    if (this.companyName || this.currentCompany?.id) {
      this.current = 1;
      this.index = 2;
    }

    this.packageName = this.localStorage.getPackageName();
    if (this.packageName !== null || this.newPackage) {
      this.current = 2;
      this.index = 3;
    }
  }
  @Output() createNewCompany = new EventEmitter<string>();

  @Output() createNewPackage = new EventEmitter<{
    name: string;
    description: string;
  }>();

  @Output() sendDocs = new EventEmitter<any>();

  @Input() currentCompany: ICompany | null;

  @Input() packagesList: any | null;

  @Input() newPackage: any | null;

  current = 0;

  index = 1;

  status = 'process';

  filename: string | null;

  @ViewChild('inputLetter') inputLetter!: ElementRef<HTMLInputElement>;

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
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
        break;
    }
  }

  // addDocs(ev: any) {
  //   const file = ev.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);

  //   const fileEntry = formData.get('file');

  //   if (fileEntry instanceof File) {
  //     this.fileName = fileEntry.name;
  //   } else {
  //     console.error('Invalid file entry');
  //   }
  // }
  public addLetter(ev: any) {
    const file = ev.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const fileEntry = formData.get('file');

    if (fileEntry instanceof File) {
      this.filename = fileEntry.name;
    } else {
      console.error('Invalid file entry');
    }
    this.sendDocs.emit(formData);
  }

  downloadDocs() {
    console.log(this.filename);
    // this.sendDocs.emit(this.fileName);
  }

  private clearPackageInfo() {
    this.localStorage.deletePackage();
    this.newPackage = null;
    this.packageName = null;
    this.filename = null;
  }
}
