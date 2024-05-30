import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICompany } from '../../interface/company.interface';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';
import { IResponseAddPackage } from '../../interface/package.interface';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [NzListModule, CommonModule, NzCollapseModule],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.scss',
})
export class ListPackagesComponent {
  @Input() packagesList: IResponseAddPackage[] | null;

  @Output() deletePackage = new EventEmitter<IResponseAddPackage>();
  @Output() selectPackage = new EventEmitter<any>();
}
