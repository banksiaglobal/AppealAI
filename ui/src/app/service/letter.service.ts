import { Injectable } from '@angular/core';
import {
  Observable,
  catchError,
  map,
  of,
  shareReplay,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppealLetter } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  constructor(private http: HttpClient) {}

  private intervalMin = 5000;

  addnewFile(body: { text: string; package: string }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/appeal/upload`, body);
  }

  /*get denial letters of package */
  getListDenialLettersForPackage(
    packageId: string
  ): Observable<IAppealLetter[]> {
    return timer(0, this.intervalMin).pipe(
      switchMap(() =>
        this.http
          .get<{ appeals: IAppealLetter[] }>(
            `${environment.apiUrl}/appeal/all/${packageId}`
          )
          .pipe(
            map((response) => response.appeals),
            tap(() => console.log('request updated')),
            shareReplay()
          )
      )
    );
  }

  deleteDenialLetter(letterId: string) {
    return this.http.delete(`${environment.apiUrl}/appeal/${letterId}`);
  }
}
