import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { IMessage } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = new BehaviorSubject<IMessage[]>([]);

  public messages$: Observable<IMessage[]> = this.messages
    .asObservable()
    .pipe(filter((messages) => messages && messages.length > 0));

  public showMessage(...messages: IMessage[]) {
    this.messages.next(messages);
  }
}
