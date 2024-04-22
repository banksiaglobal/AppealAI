import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-create-view',
  standalone: true,
  imports: [
    CommonModule,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzPageHeaderModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    RouterLink,
    NzButtonModule,
  ],
  templateUrl: './create-view.component.html',
  styleUrl: './create-view.component.scss',
})
export class CreateViewComponent {
  @Input() typeOfObj: string | null;
  @Output() addNewCompany = new EventEmitter();
  @Output() addNewPackage = new EventEmitter();

  companyName: string | null = null;

  packageName: string | null = null;

  showPackageForm = false;

  constructor() {}

  createCompany() {
    if (this.companyName?.length) {
      this.addNewCompany.emit(this.companyName);
      this.showPackageForm = true;
    }
  }

  createPackage() {
    this.addNewCompany.emit(this.packageName);
  }
}
