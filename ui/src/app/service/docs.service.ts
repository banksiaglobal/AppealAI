import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IDoc } from '../interface/docs.interface';
@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}

  addDocumentForPackage(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/document/upload`, formData);
  }

  getListDocsForCurrentPackage(packageId: string): Observable<IDoc[]> {
    return this.http
      .get<{ documents: IDoc[] }>(
        `${environment.apiUrl}/document/all/${packageId}`
      )
      .pipe(
        map((response) => response.documents),
        catchError(() => of())
      );
  }

  /*download file from server */

  downloadDocument(fileName: string) {
    return this.http.get<any>(`${environment.apiUrl}/document/${fileName}`, {
      observe: 'response',
      responseType: 'blob' as 'json',
    });
  }

  deleteDocumentForCurrentPackage(fileId: string) {
    return this.http.delete(`${environment.apiUrl}/document/${fileId}`);
  }
}
