import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ICompany } from '../../interface/company.interface';
import { RouterLink } from '@angular/router';
import { SessionStorageService } from '../../service/localStorage.service';
import { IResponseAddPackage } from '../../interface/package.interface';

@Component({
  selector: 'app-letter-page-view',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzPageHeaderModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './letter-page-view.component.html',
  styleUrl: './letter-page-view.component.scss',
})
export class LetterPageViewComponent {
  @Input() currentCompany: ICompany | null;

  @Input() listInsuranceOrg: ICompany[] | null;

  @Input() packagesList: IResponseAddPackage[] | null;

  @Output() onSelectCompany = new EventEmitter<ICompany>();

  @Output() onSelectPackage = new EventEmitter<string>();

  constructor(
    private fb: NonNullableFormBuilder,
    private localStorage: SessionStorageService
  ) {}

  documentsForm: FormGroup<{
    company: FormControl<string>;
    package: FormControl<string>;
    letter: FormControl<File | null>;
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
    letter: new FormControl<File | null>(null, [Validators.required]),
  });

  selectedFile: any;
  blob: Blob;

  submitForm() {
    console.log(this.documentsForm.value);
  }

  selectCompany(company: ICompany) {
    if (company) {
      console.log(company);
      this.documentsForm.value.company = company.id;
      this.onSelectCompany.emit(company);
      this.documentsForm.controls['package'].reset();
      this.documentsForm.controls['letter'].reset();
    }
  }

  selectPackage() {
    console.log(this.documentsForm.value.package);
    this.onSelectPackage.emit(this.documentsForm.value.package);
  }

  deleteInfoItem(typeInfo: string) {
    switch (typeInfo) {
      case 'company':
        this.documentsForm.controls['company'].reset();
        this.localStorage.clean();
        this.documentsForm.reset();
        break;
      case 'package':
        this.documentsForm.controls['package'].reset();
        this.localStorage.deletePackage();
        break;
      case 'letter':
        this.documentsForm.controls['letter'].reset();
        break;
    }
  }

  addLetter(ev: any) {
    console.log(this.documentsForm.value.package);
    console.log(ev);
    const target = ev.target as HTMLInputElement;
    this.selectedFile = target.files as FileList;

    console.log(this.selectedFile);

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && reader.result) {
        this.blob = new Blob([reader.result], {
          type: this.selectedFile[0].type,
        });
        console.log(this.blob);
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

    reader.readAsArrayBuffer(this.selectedFile[0]);
  }
}
