import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { MessagesService } from '../../service/messages.service';
import { IMessage } from '../../interface/interfaces';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, NzMessageModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('openClose', [
      transition('void => *', [style({ opacity: 0 }), animate(200)]),
      transition('* => void', [animate(200, style({ opacity: 0 }))]),
    ]),
  ],
})
export class MessagesComponent implements OnInit {
  public messages$: Observable<IMessage[]>;

  public showMessages = false;

  public isWarn = false;

  constructor(
    public messagesService: MessagesService,
    public element: ElementRef,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.messages$ = this.messagesService.messages$.pipe(
      tap((data) =>
        data[0].status == false ? (this.isWarn = true) : (this.isWarn = false)
      ),
      tap((data) => console.log(data)),
      tap(() => (this.showMessages = true)),
      tap(() => setTimeout(() => (this.showMessages = false), 2000000000))
    );
  }

  onClose() {
    this.showMessages = false;
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }
}
