import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAppealLetter } from '../../interface/interfaces';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-list-answer-ai',
  standalone: true,
  imports: [NzListModule, CommonModule, MarkdownModule],
  templateUrl: './list-answer-ai.component.html',
  styleUrl: './list-answer-ai.component.scss',
})
export class ListAnswerAiComponent {
  @Input() listAnswersAI: IAppealLetter[] | null;

  @Output() deleteAnswerAI = new EventEmitter<any>();

  clickDeleteAnswerAI(item: IAppealLetter) {
    this.deleteAnswerAI.emit(item);
  }

  isImpossibleAppeal(text: string): boolean {
    return text.includes(
      'The denial of insurance coverage cannot be contested.'
    )
      ? true
      : false;
  }
}
