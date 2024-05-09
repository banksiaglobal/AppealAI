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
import { IDoc } from '../../interface/docs.interface';
import { ListDocumentsComponent } from '../../components/list-documents/list-documents.component';

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
    ListDocumentsComponent,
  ],
  templateUrl: './letter-page-view.component.html',
  styleUrl: './letter-page-view.component.scss',
})
export class LetterPageViewComponent {
  @Input() currentCompany: ICompany | null;

  @Input() listInsuranceOrg: ICompany[] | null;

  @Input() packagesList: IResponseAddPackage[] | null;

  @Input() listDocsForPackage: IDoc[] | null;

  @Input() answerAI: any[] | null;

  @Output() onSelectCompany = new EventEmitter<ICompany>();

  @Output() onSelectPackage = new EventEmitter<any>();

  @Output() deleteDocument = new EventEmitter<any>();

  @Output() onUploadDenialLetter = new EventEmitter<any>();

  @Output() saveDocument = new EventEmitter<any>();

  constructor(
    private fb: NonNullableFormBuilder,
    private localStorage: SessionStorageService
  ) {}

  documentsForm: FormGroup<{
    company: FormControl<string>;
    package: FormControl<string>;
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
  });

  filename: string | null;

  submitForm() {
    // this.onUploadInfo.emit(this.documentsForm.value);
  }

  public selectCompany(company: ICompany) {
    if (company) {
      this.documentsForm.value.company = company.id;
      this.onSelectCompany.emit(company);
      this.documentsForm.controls['package'].reset();
      this.deleteInfoItem('letter');
    }
  }

  public selectPackage(e: any) {
    this.onSelectPackage.emit(this.documentsForm.value.package);
    this.deleteInfoItem('letter');
  }

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
    this.onUploadDenialLetter.emit(formData);
  }

  public deleteInfoItem(typeInfo: string) {
    switch (typeInfo) {
      case 'company':
        this.documentsForm.controls['company'].reset();
        this.localStorage.clean();
        this.documentsForm.reset();
        this.filename = null;
        break;
      case 'package':
        this.documentsForm.controls['package'].reset();
        this.localStorage.deletePackage();
        this.filename = null;
        break;
      case 'letter':
        this.filename = null;
        break;
    }
  }
}
