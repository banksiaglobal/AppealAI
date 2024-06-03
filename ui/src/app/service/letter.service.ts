import { Injectable } from '@angular/core';
import {
  Observable,
  map,
  shareReplay,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppealLetter, IDenialLetter } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  constructor(private http: HttpClient) {}

  private intervalMin = 50000;

  addnewFile(body: { text: string; package: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/appeal/upload`, body);
  }

  /*get denial letters of package */
  getListDenialLettersForPackage(
    packageId: string
  ): Observable<IDenialLetter[]> {
    return timer(0, this.intervalMin).pipe(
      switchMap(() =>
        this.http
          .get<{ denials: IDenialLetter[] }>(
            `${environment.apiUrl}/appeal/denial/${packageId}`
          )
          .pipe(
            take(5),
            map((response) => response.denials),
            tap(() => console.log('request updated')),
            shareReplay()
          )
      )
    );
  }

  /*get appeal letters of package  */
  getAppealAnswersForPackage(packageId: string): Observable<IAppealLetter[]> {
    return timer(0, this.intervalMin).pipe(
      switchMap(() =>
        this.http
          .get<{ appealLetters: IAppealLetter[] }>(
            `${environment.apiUrl}/appeal/letter/${packageId}`
          )
          .pipe(
            take(5),
            map((response) => response.appealLetters),
            tap(() => console.log('request updated')),
            shareReplay()
          )
      )
    );
  }

  /*get denial letters for all cases */
  getAllListDenialLetters(): Observable<IDenialLetter[]> {
    return this.http
      .get<{ denials: IDenialLetter[] }>(
        `${environment.apiUrl}/appeal/all/denial/`
      )
      .pipe(
        map((response) => response.denials),
        tap(() => console.log('request updated')),
        shareReplay()
      );
  }

  /*get appeal letters for all cases */
  getAllAppealAnswers(): Observable<IAppealLetter[]> {
    return this.http
      .get<{ test: IAppealLetter[] }>(
        `${environment.apiUrl}/appeal/all/letter/`
      )
      .pipe(
        map((response) => response.test),
        tap(() => console.log('request updated')),
        shareReplay()
      );
  }

  deleteDenialLetter(letterId: string) {
    return this.http.delete(`${environment.apiUrl}/appeal/${letterId}`);
  }

  deleteAnswerAI(appealId: string) {
    return this.http.delete(`${environment.apiUrl}/appeal/${appealId}`);
  }
}
