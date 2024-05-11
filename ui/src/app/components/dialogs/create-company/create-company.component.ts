import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
@Component({
  selector: 'app-create-company',
  standalone: true,
  imports: [
    NzModalModule,
    CommonModule,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzCollapseModule,
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss',
})
export class CreateCompanyComponent {
  @Input() companyName: string | null;

  newCompanyName: string | null;

  @Output() createNewCompany = new EventEmitter<string>();

  save() {
    if (this.newCompanyName) {
      this.createNewCompany.emit(this.newCompanyName);
    }
  }
}
