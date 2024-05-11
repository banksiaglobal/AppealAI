import { Component } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { ICompany } from '../../../interface/company.interface';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { CommonModule } from '@angular/common';
import { LetterPageViewComponent } from '../../letter-page-view/letter-page-view.component';
import { SessionStorageService } from '../../../service/localStorage.service';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { DocsService } from '../../../service/docs.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { IDoc } from '../../../interface/docs.interface';
import { LetterService } from '../../../service/letter.service';
import { IAppealLetter } from '../../../interface/interfaces';

@Component({
  selector: 'app-letter-page',
  standalone: true,
  imports: [CommonModule, LetterPageViewComponent, NzMessageModule],
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
    private router: Router,
    private messageService: NzMessageService
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

  listDocsForPackage$: Observable<IDoc[]>;

  answerAI$: Observable<any>;

  public listDenialLetters$: Observable<IAppealLetter[]>;

  onUploadDenialLetter(info: any) {
    const body = {
      text: info.text,
      packageId: info.package.id,
    };
    this.answerAI$ = this.letterService.addnewFile(body).pipe(
      map((data) => {
        return data;
      }),
      tap(() => this.createSuccessMessage('denial letter', 'was added')),
      tap(() => this.goToAIPage()),
      catchError((error: any) => {
        tap(() => this.createErrorMessage('denial letter', "wasn't added"));
        return throwError(() => error);
      })
    );
  }

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
  }

  onSelectCompany(company: ICompany) {
    if (company) {
      this.packagesList$ = this.packageService
        .getListPackagesForCurrentCompany(company.id)
        .pipe(tap(() => this.saveCurrentCompany(company)));
    }
  }

  onSelectPackage(packageInfo: IResponseAddPackage) {
    this.packagesList$
      .pipe(
        tap((data) => {
          this.localStorage.savePackage(packageInfo.id, packageInfo.name);
          this.getAllDocsForCurrentPackage(packageInfo.id);
          this.getListLetters(packageInfo.id);
        })
      )
      .subscribe();
  }

  getAllDocsForCurrentPackage(packageId: string) {
    if (packageId) {
      this.listDocsForPackage$ = this.docsService
        .getListDocsForCurrentPackage(packageId)
        .pipe(
          map((data) => {
            return data;
          })
        );
    }
  }

  private saveCurrentCompany(company: ICompany) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
  }

  goToAIPage() {
    this.router.navigate(['/answer']);
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

  deleteDocument(documentInfo: IDoc) {
    this.docsService
      .deleteDocumentForCurrentPackage(documentInfo.id)
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

  saveDocument(documentInfo: IDoc) {
    this.docsService
      .downloadDocument(documentInfo.name)
      .pipe(
        map((result: any) => {
          console.log(result);
          this.downloadFile(result);
          return result;
        }),
        tap(() => {
          this.createSuccessMessage('document', 'was saved');
          this.getAllDocsForCurrentPackage(documentInfo.packageId);
        }),
        catchError((error: any) => {
          this.createErrorMessage('document', "wasn't saved. Smth went wrong");
          console.error(error);

          alert(
            'Problem while downloading the file.\n' +
              '[' +
              error.status +
              '] ' +
              error.statusText
          );
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  downloadFile(response: any) {
    // console.log(response);
    // let header_content = response.headers.get('content-disposition');
    // let file = header_content.split('=')[1];
    // file = file.substring(1, file.length - 1);
    // let extension = file.split('.')[1].toLowerCase();
    // let newVariable: any = window.navigator;
    // let newBlob = new Blob([response.body], { type: extension });
    // if (newVariable && newVariable.msSaveOrOpenBlob) {
    //   newVariable.msSaveOrOpenBlob(newBlob);
    //   return;
    // }
  }

  getListLetters(packageId: string) {
    this.listDenialLetters$ =
      this.letterService.getListDenialLettersForPackage(packageId);
  }
}
