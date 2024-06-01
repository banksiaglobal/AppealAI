import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [
    CommonModule,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzModalModule,
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss',
})
export class CreateCompanyComponent {
  isVisible = false;

  @Input() companyName: string | null;

  newCompanyName: string | null;

  @Output() createNewCompany = new EventEmitter<string>();
  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  save() {
    if (this.newCompanyName) {
      this.createNewCompany.emit(this.newCompanyName);
    }
    this.isVisible = false;
  }
}
