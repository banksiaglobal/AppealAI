import { Component, OnInit } from '@angular/core';
import { CreateViewComponent } from '../create-view/create-view.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CreateViewComponent, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  public typeOfObj: string | null;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
    this.typeOfObj = this.route.snapshot.queryParamMap.get('type');
  }

  addNewCompany(companyName: string) {
    console.log(companyName);
    this.companyService.addNewCompany(companyName).pipe().subscribe();
  }

  addNewPackage(packageName: string) {
    console.log(packageName);
  }
}
