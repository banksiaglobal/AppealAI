import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import {
  NzHeaderComponent,
  NzLayoutModule,
} from 'ng-zorro-antd/layout/public-api';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-create-page-view',
  standalone: true,
  imports: [
    NzPageHeaderModule,
    NzHeaderComponent,
    CommonModule,
    NzLayoutModule,
    NzFlexModule,
  ],
  templateUrl: './create-page-view.component.html',
  styleUrl: './create-page-view.component.scss',
})
export class CreatePageViewComponent {
  @Input() typeOfObj: string | null;
}
