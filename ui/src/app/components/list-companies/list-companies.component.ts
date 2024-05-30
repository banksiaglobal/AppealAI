import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';
import { ICompany } from '../../interface/company.interface';

@Component({
  selector: 'app-list-companies',
  standalone: true,
  imports: [NzListModule, CommonModule, NzCollapseModule],
  templateUrl: './list-companies.component.html',
  styleUrl: './list-companies.component.scss',
})
export class ListCompaniesComponent {
  @Input() companiesList: ICompany[] | null;

  @Output() deleteCompany = new EventEmitter<any>();
  @Output() selectCompany = new EventEmitter<any>();

  clickDeleteCompany(item: any) {
    this.deleteCompany.emit(item);
  }
}
