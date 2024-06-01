import { Component, OnInit } from '@angular/core';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-upload-doc-message',
  standalone: true,
  imports: [NzNotificationModule],
  templateUrl: './upload-doc-message.component.html',
  styleUrl: './upload-doc-message.component.scss',
})
export class UploadDocMessageComponent implements OnInit {
  constructor(private notification: NzNotificationService) {}
  ngOnInit(): void {
    this.createNotification('success');
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'A document has been successfully added to the system.',
      'The process of uploading will take approximately thirty minutes, so you will be able to continue working on your current document after this time',
      { nzPlacement: 'bottom' }
    );
  }
}
