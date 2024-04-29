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

  @Output() onSelectPackage = new EventEmitter<IResponseAddPackage>();

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

  submitForm() {
    console.log(this.documentsForm.value);
  }

  selectCompany(company: ICompany) {
    this.documentsForm.value.company = company.id;
    this.onSelectCompany.emit(company);
    this.currentCompany = company;
  }

  selectPackage(packageItem: IResponseAddPackage) {
    this.documentsForm.value.package = packageItem.name;
    this.onSelectPackage.emit(packageItem);
  }

  deleteInfoItem(typeInfo: string) {
    switch (typeInfo) {
      case 'company':
        this.currentCompany = null;
        this.localStorage.clean();
        this.documentsForm.reset();
        break;
      case 'package':
        this.documentsForm.patchValue({
          package: '',
        });
        this.localStorage.deletePackage();
        break;
    }
  }

  addLetter(ev: any) {
    console.log(ev);
  }
}
