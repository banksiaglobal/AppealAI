import { Component, Input } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { IDoc } from '../../interface/docs.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-documents',
  standalone: true,
  imports: [NzListModule, CommonModule],
  templateUrl: './list-documents.component.html',
  styleUrl: './list-documents.component.scss',
})
export class ListDocumentsComponent {
  @Input() listDocsForPackage: IDoc[] | null;

  deleteInfoItem(ev: any) {
    console.log(ev.value);
  }
}