import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ListAnswerAiComponent } from '../../../components/list-answer-ai/list-answer-ai.component';
import { ListDenialLettersComponent } from '../../../components/list-denial-letters/list-denial-letters.component';
import { ListDocumentsComponent } from '../../../components/list-documents/list-documents.component';
import { ICompany } from '../../../interface/company.interface';
import { IDoc } from '../../../interface/docs.interface';
import { IAppealLetter, IDenialLetter } from '../../../interface/interfaces';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { SessionStorageService } from '../../../service/localStorage.service';
import { NzListModule } from 'ng-zorro-antd/list';
import { IPatient, IPatientVisit } from '../../../interface/patient.interface';
import { TruncatePipe } from '../../../pipes/truncate-doc.pipe';

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
    NzToolTipModule,
    ListDenialLettersComponent,
    ListAnswerAiComponent,
    NzCollapseModule,
    NzListModule,
    TruncatePipe,
  ],
  templateUrl: './letter-page-view.component.html',
  styleUrl: './letter-page-view.component.scss',
})
export class LetterPageViewComponent {
  @Input() currentCompany: ICompany | null;

  @Input() listInsuranceOrg: ICompany[] | null;

  @Input() packagesList: IResponseAddPackage[] | null;

  @Input() documentsList: IDoc[] | null;

  @Input() isUploadDoc: boolean | null;

  @Input() listAnswersAI: IAppealLetter[] | null;

  @Input() listDenialLetters: IDenialLetter[] | null;

  @Input() listALLDenialLetters: IDenialLetter[] | null;

  @Input() listALLAnswersAI: IAppealLetter[] | null;

  @Input() listPatients: IPatient[] | null = [];

  @Input() listPatientEncounters: IPatientVisit[] | null = [];

  @Output() onSelectCompany = new EventEmitter<ICompany>();

  @Output() onSelectPackage = new EventEmitter<any>();

  @Output() deleteDocument = new EventEmitter<any>();

  @Output() deleteLetter = new EventEmitter<any>();

  @Output() deleteAnswerAI = new EventEmitter<any>();

  @Output() onUploadDenialLetter = new EventEmitter<any>();

  @Output() saveDocument = new EventEmitter<any>();

  @Output() showListEncounters = new EventEmitter<any>();

  packageName: string;
  filteredPeople: IPatient[] = [];
  nzFilterOption = (): boolean => true;

  constructor(
    private fb: NonNullableFormBuilder,
    private localStorage: SessionStorageService
  ) {}

  documentsForm: FormGroup<{
    company: FormControl<string>;
    package: FormControl<any>;
    text: FormControl<string>;
    patientID: FormControl<string>;
    patientEncounter: FormControl<string>;
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
    text: ['', [Validators.required]],
    patientID: ['', [Validators.required]],
    patientEncounter: ['', [Validators.required]],
  });

  submitForm() {
    this.onUploadDenialLetter.emit(this.documentsForm.value);
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
    this.packageName = this.documentsForm.value.package;
    this.onSelectPackage.emit(this.documentsForm.value.package);
    this.deleteInfoItem('letter');
  }

  public deleteInfoItem(typeInfo: string) {
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
        break;
    }
  }
  searchPatient(value: string): void {
    if (!value.trim()) {
      this.filteredPeople = [];
    } else if (this.listPatients) {
      this.filteredPeople = this.listPatients.filter((person) =>
        person.id.startsWith(value)
      );
    }
    if (value !== null && this.documentsForm.value.patientID) {
      this.showListEncounters.emit(this.documentsForm.value.patientID);
    }
  }

  searchEncounter(value: string) {
    console.log(value);
  }
}
