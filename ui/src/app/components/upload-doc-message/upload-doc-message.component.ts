import { Component } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-upload-doc-message',
  standalone: true,
  imports: [NzSpinModule, NzAlertModule],
  templateUrl: './upload-doc-message.component.html',
  styleUrl: './upload-doc-message.component.scss',
})
export class UploadDocMessageComponent {}
