import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';

import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
  ],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.scss',
})
export class CreateCompanyComponent {
  newCompanyName = '';

  @Output() createNewCompany = new EventEmitter<string>();

  save() {
    this.createNewCompany.emit(this.newCompanyName);
  }
}
