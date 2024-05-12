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
import { IDoc } from '../interface/docs.interface';
import { IAppealLetter } from '../interface/interfaces';
@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}
  private intervalMin = 10000;

  addDocumentForPackage(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/document/upload`, formData);
  }

  getListDocsForCurrentPackage(packageId: string): Observable<IDoc[]> {
    return timer(0, this.intervalMin).pipe(
      switchMap(() =>
        this.http
          .get<{ documents: IDoc[] }>(
            `${environment.apiUrl}/document/all/${packageId}`
          )
          .pipe(
            map((response) => response.documents),
            tap(() => console.log('request updated')),
            shareReplay()
          )
      )
    );
  }

  /*download file from server */

  downloadDocument(fileName: string) {
    return this.http.get<any>(`${environment.apiUrl}/document/${fileName}`, {
      observe: 'response',
      responseType: 'blob' as 'json',
    });
  }

  deleteDocumentForCurrentPackage(fileName: string) {
    return this.http.delete(`${environment.apiUrl}/document/${fileName}`);
  }
}
