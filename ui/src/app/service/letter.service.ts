import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  constructor(private http: HttpClient) {}

  addnewFile(data: any): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/document/upload`, data)
      .pipe(map((response) => response));
  }
}
