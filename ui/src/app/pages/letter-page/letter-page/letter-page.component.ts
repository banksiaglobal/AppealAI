import { ChangeDetectorRef, Component } from '@angular/core';
import {
  Observable,
  catchError,
  map,
  of,
  switchMap,
  tap,
  throwError,
  timer,
} from 'rxjs';
import { ICompany } from '../../../interface/company.interface';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from '../../../service/localStorage.service';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { DocsService } from '../../../service/docs.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { IDoc } from '../../../interface/docs.interface';
import { LetterService } from '../../../service/letter.service';
import { IAppealLetter, IDenialLetter } from '../../../interface/interfaces';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { LetterPageViewComponent } from '../letter-page-view/letter-page-view.component';
import { PatientService } from '../../../service/patient.service';
import { IPatient, IPatientVisit } from '../../../interface/patient.interface';

@Component({
  selector: 'app-letter-page',
  standalone: true,
  imports: [
    CommonModule,
    LetterPageViewComponent,
    NzMessageModule,
    NzModalModule,
  ],
  templateUrl: './letter-page.component.html',
  styleUrl: './letter-page.component.scss',
})
export class LetterPageComponent {
  constructor(
    private companyService: CompanyService,
    private packageService: PackageService,
    private localStorage: SessionStorageService,
    private docsService: DocsService,
    private letterService: LetterService,
    private messageService: NzMessageService,
    private cdr: ChangeDetectorRef,
    private modal: NzModalService,
    private patient: PatientService
  ) {}
  ngOnInit(): void {
    this.localStorage.clean();
    this.getData();
  }

  isLoading = false;
  isVisible = false;
  selectedFile: any;

  currentCompany$: Observable<ICompany>;

  packagesList$: Observable<IResponseAddPackage[]>;

  listInsuranceOrg$: Observable<ICompany[]>;

  documentsList$: Observable<IDoc[]>;

  public isUploadDoc$: Observable<boolean>;

  public listDenialLetters$: Observable<IDenialLetter[]>;

  public listAnswersAI$: Observable<IAppealLetter[]>;

  public listALLDenialLetters$: Observable<IDenialLetter[]>;

  public listALLAnswersAI$: Observable<IAppealLetter[]>;

  public listPatients$: Observable<IPatient[]>;

  public listPatientEncounters$: Observable<IPatientVisit[]>;

  onUploadDenialLetter(info: any) {
    const body = {
      text: info.text,
      package: info.package.id,
      patientName: info.patientEncounter.patient.fullName,
      encounter: info.patientEncounter.id,
    };
    this.letterService
      .addnewFile(body)
      .pipe(
        tap(() => {
          this.getListDenialLetters(info.package.id);
          this.modal.success({
            nzTitle: 'Great, the document is currently being uploaded.',
            nzContent:
              'In a few minutes, the uploaded email and response will appear on this page',
          });
        }),
        switchMap(() => timer(5 * 60 * 1000)), // 5 minutes delay
        switchMap(() => {
          this.getListDenialLetters(info.package.id);
          this.getAllListAppealsFromAI();
          this.getAllListDenialLetters();
          this.modal.success({
            nzTitle: 'Great, the document was uploaded.',
            nzContent: 'All the information you need can be found below',
          });
          return of(true);
        }),

        catchError((error: any) => {
          tap(() => this.createErrorMessage('denial letter', "wasn't added"));
          this.isUploadDoc$ = of(false);
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
    this.getListPatients();
    this.getAllListDenialLetters();
    this.getAllListAppealsFromAI();
    this.cdr.markForCheck();
  }

  onSelectCompany(company: ICompany) {
    if (company) {
      this.packagesList$ = this.packageService
        .getListPackagesForCurrentCompany(company.id)
        .pipe(tap(() => this.saveCurrentCompany(company)));
    }
  }

  onSelectPackage(packageInfo: IResponseAddPackage) {
    if (packageInfo) {
      this.packagesList$
        .pipe(
          tap((data) => {
            this.localStorage.savePackage(packageInfo.id, packageInfo.name);
            this.getAllDocsForCurrentPackage(packageInfo.id);
            this.getListDenialLetters(packageInfo.id);
          })
        )
        .subscribe();
    }
  }

  private saveCurrentCompany(company: ICompany) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
  }

  createErrorMessage(type: string, action: string): void {
    this.messageService.error(`The ${type} ${action}. Try it again`, {
      nzDuration: 2000,
    });
  }

  createSuccessMessage(type: string, action: string): void {
    this.messageService.success(`The ${type} ${action}.`, {
      nzDuration: 2000,
    });
  }

  getListPatients() {
    this.listPatients$ = this.patient.getListPacients();
  }

  getListPatientEncounters(patientID: string) {
    this.listPatientEncounters$ =
      this.patient.getListAppointmentsForPatiens(patientID);
  }

  /*get lists info for current package*/
  getAllDocsForCurrentPackage(packageId: string) {
    if (packageId) {
      this.documentsList$ = this.docsService
        .getListDocsForCurrentPackage(packageId)
        .pipe(
          map((data) => {
            return data;
          })
        );
    }
  }

  getListDenialLetters(packageId: string) {
    this.listDenialLetters$ = this.letterService
      .getListDenialLettersForPackage(packageId)
      .pipe(
        map((data) => {
          return data;
        }),
        tap((data) => {
          if (data) {
            this.getListAppealsFromAI(packageId);
          }
        })
      );
  }

  getListAppealsFromAI(packageId: string) {
    this.listAnswersAI$ = this.letterService
      .getAppealAnswersForPackage(packageId)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  /*get lists info for all cases*/

  getAllListDenialLetters() {
    this.listALLDenialLetters$ = this.letterService
      .getAllListDenialLetters()
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getAllListAppealsFromAI() {
    this.listALLAnswersAI$ = this.letterService.getAllAppealAnswers();
  }

  /*deleting files from server*/

  deleteDocument(documentInfo: IDoc) {
    this.docsService
      .deleteDocumentForCurrentPackage(documentInfo.name)
      .pipe(
        tap(() => {
          this.createSuccessMessage('document', 'was deleted');
          this.getAllDocsForCurrentPackage(documentInfo.packageId);
        }),
        catchError((error: any) => {
          this.createErrorMessage(
            'document',
            "wasn't deleted. Smth went wrong"
          );
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  deleteLetter(letterInfo: IDenialLetter) {
    this.letterService
      .deleteDenialLetter(letterInfo.id)
      .pipe(
        tap(() => {
          this.createSuccessMessage('letter', 'was deleted');
          this.getListDenialLetters(String(letterInfo.package));
          this.getListAppealsFromAI(String(letterInfo.package));
          this.getAllListDenialLetters();
          this.getAllListAppealsFromAI();
        }),
        catchError((error: any) => {
          this.createErrorMessage('letter', "wasn't deleted. Smth went wrong");
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  deleteAnswerAI(appealLetter: IAppealLetter) {
    this.letterService
      .deleteAnswerAI(appealLetter.id)
      .pipe(
        tap(() => {
          this.createSuccessMessage('appeal letter', 'was deleted');
          this.getListAppealsFromAI(String(appealLetter.package));
          this.getAllListAppealsFromAI();
        }),
        catchError((error: any) => {
          this.createErrorMessage(
            'appeal letter',
            "wasn't deleted. Smth went wrong"
          );
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}
