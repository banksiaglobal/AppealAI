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

  formData: FormData;

  answerAI$: Observable<any>;

  onUploadDenialLetter(data: any) {
    this.answerAI$ = this.docsService.addDocumentForPackage(this.formData).pipe(
      map((data) => {
        return data;
      }),
      tap(() => this.createSuccessMessage('file', 'was added')),
      tap(() => this.goToAIPage()),
      catchError((error: any) => {
        tap(() => this.createErrorMessage('file', "wasn't added"));
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

  onSelectPackage(packageName: string) {
    let packageId: string;
    this.packagesList$
      .pipe(
        tap((data) => {
          const filteredData = data.filter((el) => el.name === packageName);
          filteredData.forEach((el) => {
            (packageId = el.id), this.localStorage.savePackage(el.id, el.name);
          });
          this.getAllDocsForCurrentPackage(packageId);
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
    this.router.navigate(['/AI']);
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
}
