import { Component, Inject } from '@angular/core';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { DialogRefDel } from './dialog-ref-del';
import { DIALOG_DATA } from './dialog-tokens';
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
  constructor(
    private dialogRefDel: DialogRefDel,
    @Inject(DIALOG_DATA) public data: any
  ) {}

  close() {
    this.dialogRefDel.close(undefined);
  }

  save() {
    this.dialogRefDel.close(this.newCompanyName.trim());
  }
}
