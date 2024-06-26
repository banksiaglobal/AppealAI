import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { IDoc } from '../../interface/docs.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { TruncatePipe } from '../../pipes/truncate-doc.pipe';

@Component({
  selector: 'app-list-documents',
  standalone: true,
  imports: [
    NzListModule,
    CommonModule,
    RouterLink,
    NzToolTipModule,
    NzCollapseModule,
    TruncatePipe,
  ],
  templateUrl: './list-documents.component.html',
  styleUrl: './list-documents.component.scss',
})
export class ListDocumentsComponent {
  @Input() documentsList: IDoc[] | null;

  @Output() deleteDocument = new EventEmitter<any>();

  @Output() saveDocument = new EventEmitter<any>();

  deleteInfoItem(infoFile: IDoc) {
    this.deleteDocument.emit(infoFile);
  }

  downloadItem(infoFile: IDoc) {
    this.saveDocument.emit(infoFile);
  }
}
