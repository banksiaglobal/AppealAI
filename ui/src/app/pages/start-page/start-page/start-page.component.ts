import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { StartPageViewComponent } from '../start-page-view/start-page-view.component';
import { map, catchError, throwError, tap, Observable } from 'rxjs';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICompany } from '../../../interface/company.interface';
import { IResponseAddPackage } from '../../../interface/package.interface';
import { SessionStorageService } from '../../../service/localStorage.service';
import { LetterService } from '../../../service/letter.service';

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
export class StartPageComponent {
  constructor(
    private companyService: CompanyService,
    private packageService: PackageService,
    private messageSrvice: NzMessageService,
    private localStorage: SessionStorageService,
    private docsService: LetterService
  ) {}

  public currentCompany$: Observable<ICompany>;

  public newPackage$: Observable<IResponseAddPackage>;

  createNewCompany(companyName: string) {
    this.currentCompany$ = this.companyService.addNewCompany(companyName).pipe(
      map((data) => {
        return data;
      }),
      tap(() => this.createSuccessMessage('company')),
      tap((data) => this.localStorage.saveCompany(data.id, data.name)),
      catchError((error: any) => {
        this.createErrorMessage('company');
        return throwError(() => error);
      })
    );
  }

  createNewPackage(packageitem: { name: string; description: string }) {
    console.log(packageitem);
    this.newPackage$ = this.packageService
      .addNewPackageForCompany(
        this.localStorage.getCompanyId(),
        packageitem.name,
        packageitem.description
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap(() => this.createSuccessMessage('package')),
        catchError((error: any) => {
          this.createErrorMessage('package');
          return throwError(() => error);
        })
      );
  }

  createErrorMessage(type: string): void {
    this.messageSrvice.error(`The ${type} wasn't added. Try it again`, {
      nzDuration: 2000,
    });
  }

  createSuccessMessage(type: string): void {
    this.messageSrvice.success(`The ${type} was added.`, {
      nzDuration: 2000,
    });
  }

  sendDocs(files: { blob: Blob; selectedFiles: any }): void {
    console.log(files);
    this.docsService
      .addnewFile(files.blob, files.selectedFiles)
      .pipe(tap(() => this.createSuccessMessage('doc')))
      .subscribe();
  }
}