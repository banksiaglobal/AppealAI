import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { StartPageViewComponent } from '../start-page-view/start-page-view.component';
import { map, catchError, throwError, tap, Observable, of } from 'rxjs';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICompany } from '../../../interface/company.interface';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { SessionStorageService } from '../../../service/localStorage.service';
import { DocsService } from '../../../service/docs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    CommonModule,
    NzStepsModule,
    NzButtonModule,
    NzLayoutModule,
    StartPageViewComponent,
    NzMessageModule,
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private packageService: PackageService,
    private messageSrvice: NzMessageService,
    private localStorage: SessionStorageService,
    private docsService: DocsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let upload = this.route.snapshot.queryParamMap.get('upload') ? true : false;
    if (upload !== true) {
      this.localStorage.clean();
    }
    this.getData();
  }

  public listInsuranceOrg$: Observable<ICompany[]>;
  public packagesList$: Observable<IResponseAddPackage[]>;
  public documentsList$: Observable<any[]>;
  public currentCompany$: Observable<ICompany>;
  public newPackage$: Observable<IResponseAddPackage>;
  public isUploadDoc$: Observable<boolean>;

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
  }

  onSelectCompany(company: ICompany) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
    this.packagesList$ = this.packageService.getListPackagesForCurrentCompany(
      company.id
    );
  }

  onSelectPackage(packageInfo: IResponseAddPackage) {
    this.newPackage$ = of(packageInfo);
    this.localStorage.savePackage(packageInfo.id, packageInfo.name);
    this.packagesList$ = this.packageService.getListPackagesForCurrentCompany(
      packageInfo.companyId
    );
  }

  createNewCompany(companyName: string) {
    this.currentCompany$ = this.companyService.addNewCompany(companyName).pipe(
      map((data) => {
        return data;
      }),
      tap((data) => {
        this.createSuccessMessage('company', 'added'),
          this.localStorage.saveCompany(data.id, data.name),
          this.getData();
      }),

      catchError((error: any) => {
        this.createErrorMessage('company', 'added');
        return throwError(() => error);
      })
    );
  }

  createNewPackage(packageitem: { name: string; description: string }) {
    const companyId = this.localStorage.getCompanyId();
    if (companyId)
      this.newPackage$ = this.packageService
        .addNewPackageForCompany(
          companyId,
          packageitem.name,
          packageitem.description
        )
        .pipe(
          map((data) => {
            return data;
          }),
          tap((data) => {
            this.createSuccessMessage('package', 'added');
            this.localStorage.savePackage(data.id, data.name);
            this.getListPackageForCompany(companyId);
          }),
          catchError((error: any) => {
            this.createErrorMessage('package', 'added');
            return throwError(() => error);
          })
        );
  }

  getListPackageForCompany(companyId: string) {
    this.packagesList$ = this.packageService
      .getListPackagesForCurrentCompany(companyId)
      .pipe(map((response) => response));
  }

  getListDocsForPackage(packageId: string) {}

  createErrorMessage(type: string, action: string): void {
    this.messageSrvice.error(`The ${type} wasn't ${action}. Try it again`, {
      nzDuration: 2000,
    });
  }

  createSuccessMessage(type: string, action: string): void {
    this.messageSrvice.success(`The ${type} was ${action}.`, {
      nzDuration: 2000,
    });
  }

  sendDocs(formData: any): void {
    const packageId = this.localStorage.getPackageId();
    formData.append('package', packageId);
    this.docsService
      .addDocumentForPackage(formData)
      .pipe(
        tap(() => {
          this.createSuccessMessage('document', 'added');
          this.isUploadDoc$ = of(true);
        }),
        catchError((error: any) => {
          this.isUploadDoc$ = of(false);
          this.createErrorMessage('document', 'added');
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  onDeleteCompany(companyId: string) {
    this.companyService
      .deleteCurrentCompany(companyId)
      .pipe(
        tap(() => {
          this.createSuccessMessage('company', 'deleted'), this.getData();
        }),
        catchError((error: any) => {
          this.isUploadDoc$ = of(false);
          this.createErrorMessage('company', 'deleted');
          return throwError(() => error);
        })
      )
      .subscribe();
  }

  onDeletePackage(packageInfo: IResponseAddPackage) {
    this.packageService
      .deleteCurrentPackage(packageInfo.id)
      .pipe(
        tap(() => {
          this.createSuccessMessage('package', 'deleted'), this.getData();
          this.getListPackageForCompany(packageInfo.companyId);
        }),
        catchError((error: any) => {
          this.isUploadDoc$ = of(false);
          this.createErrorMessage('package', 'deleted');
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}
