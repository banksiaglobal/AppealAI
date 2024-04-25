import { Component, OnInit } from '@angular/core';
import { CreateViewComponent } from '../create-view/create-view.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { Observable, map } from 'rxjs';
import { ICompany } from '../../../interface/company.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CreateViewComponent, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  public typeOfObj: string | null;

  public newCreatedCompany$: Observable<ICompany>;

  listInsuranceOrg$: Observable<ICompany[]>;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.typeOfObj = this.route.snapshot.queryParamMap.get('type');
    this.getData();
  }

  addNewCompany(companyName: string) {
    this.newCreatedCompany$ = this.companyService
      .addNewCompany(companyName)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  addNewPackage(packageInfo: any) {
    console.log(packageInfo);
    this.packageService.addNewPackageForCompany(packageInfo).pipe().subscribe();
  }

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
  }
}
