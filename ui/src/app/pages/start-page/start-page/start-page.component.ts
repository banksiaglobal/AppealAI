import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { StartPageViewComponent } from '../start-page-view/start-page-view.component';
import { map, catchError, throwError, tap } from 'rxjs';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private messageSrvice: NzMessageService
  ) {}

  createNewCompany(companyName: string) {
    this.companyService
      .addNewCompany(companyName)
      .pipe(
        map((data) => {
          return data;
        }),
        tap(() => this.createSuccessMessage('company')),
        tap(() => this.createSuccessMessage('company')),
        catchError((error: any) => {
          this.createErrorMessage('company');
          return throwError(() => error);
        })
      )
      .subscribe();
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
}
