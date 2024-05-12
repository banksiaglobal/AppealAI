import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { IAppealLetter } from '../../interface/interfaces';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-denial-letters',
  standalone: true,
  imports: [NzListModule, CommonModule],
  templateUrl: './list-denial-letters.component.html',
  styleUrl: './list-denial-letters.component.scss',
})
export class ListDenialLettersComponent {
  @Input() listDenialLetters: IAppealLetter[] | null;

  @Output() deleteDocument = new EventEmitter<any>();

  deleteLetter(item: IAppealLetter) {
    this.deleteDocument.emit(item);
  }
}
