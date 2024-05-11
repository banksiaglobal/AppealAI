import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppealLetter } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  constructor(private http: HttpClient) {}

  addnewFile(body: { text: string; packageId: string }): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/appeal/upload`, body)
      .pipe(map((response) => response));
  }

  /*get denial letters of package */
  getListDenialLettersForPackage(
    packageId: string
  ): Observable<IAppealLetter[]> {
    return this.http
      .get<{ appeals: IAppealLetter[] }>(
        `${environment.apiUrl}/appeal/all/${packageId}`
      )
      .pipe(
        map((response) => response.appeals),
        catchError(() => of())
      );
  }
}
