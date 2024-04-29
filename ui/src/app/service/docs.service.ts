import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}

  submitDocs(formData: FormData, packageName: any) {
    return this.http
      .post(`${environment.apiUrl}/api/document/upload `, formData)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }
}
