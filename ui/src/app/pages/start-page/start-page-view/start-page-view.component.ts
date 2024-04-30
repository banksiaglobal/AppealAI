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

  companyName: string | null;

  ngOnInit(): void {
    this.companyName = this.localStorage.getCompanyName();
    if (this.companyName || this.currentCompany?.id) {
      this.current = 1;
      this.index = 2;
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

  selectedFile: any = [];

  blob: Blob;

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
        break;
      case 'package':
        this.localStorage.deletePackage();
        this.newPackage = null;
        break;
      case 'letter':
        this.selectedFile = [];
        this.inputLetter.nativeElement.value = '';
        break;
    }
  }

  addDocs(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFile.push(file);
        formData.append(file.name, file);
      }
    }

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && reader.result) {
        this.blob = new Blob([reader.result], {
          type: this.selectedFile[0].type,
        });
        var element = document.querySelector('p');
        if (element) {
          for (let i = 0; i < this.selectedFile.length; i++) {
            let f = this.selectedFile[i];
            element.innerHTML = `${element.innerHTML} ${f.name} ${f.size} ${f.type}`;
          }
          console.log(this.selectedFile);
        }
      } else {
        console.error('File could not be read.');
      }
    };
  }

  downloadDocs() {
    const docs = { blob: this.blob, files: this.selectedFile };
    console.log(docs);
    this.sendDocs.emit(docs);
  }
}
