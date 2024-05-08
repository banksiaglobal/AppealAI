import { Component } from '@angular/core';
import { Observable, catchError, filter, map, of, tap, throwError } from 'rxjs';
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

  formData: FormData;

  answerAI$: Observable<any>;

  onUploadDenialLetter(data: any) {
    const formdata: FormData = new FormData();

    this.answerAI$ = this.docsService.submitDocs(this.formData).pipe(
      map((data) => {
        return data;
      }),
      tap(() => this.createSuccessMessage('files')),
      tap(() => this.goToAIPage()),
      catchError((error: any) => {
        tap(() => this.createErrorMessage('files'));
        return throwError(() => error);
      })
    );
  }

  addDocs(formData: FormData) {
    this.formData = formData;
    console.log(this.formData.get('sinsay-1.pdf'));
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
    this.packagesList$
      .pipe(
        tap((data) => {
          const filteredData = data.filter((el) => el.name === packageName);
          filteredData.forEach((el) =>
            this.localStorage.savePackage(el.id, el.name)
          );
        })
      )
      .subscribe();
  }

  private saveCurrentCompany(company: ICompany) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
  }

  goToAIPage() {
    this.router.navigate(['/AI']);
  }

  createErrorMessage(type: string): void {
    this.messageService.error(`The ${type} weren't added. Try it again`, {
      nzDuration: 2000,
    });
  }

  createSuccessMessage(type: string): void {
    this.messageService.success(`The ${type} were added.`, {
      nzDuration: 2000,
    });
  }
}
