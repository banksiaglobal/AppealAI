import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAppealLetter } from '../../interface/interfaces';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-list-answer-ai',
  standalone: true,
  imports: [NzListModule, CommonModule],
  templateUrl: './list-answer-ai.component.html',
  styleUrl: './list-answer-ai.component.scss',
})
export class ListAnswerAiComponent {
  @Input() listAnswersAI: any[] | null;

  @Output() deleteAnswerAI = new EventEmitter<any>();

  clickDeleteAnswerAI(item: any) {
    this.deleteAnswerAI.emit(item);
  }
}
