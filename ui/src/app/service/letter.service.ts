import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  constructor(private http: HttpClient) {}

  getCurrentPackageInfo(packageId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/api/package/${packageId}`)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }

  getListPackagesForCurrentCompany(companyId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/package/all/${companyId}`)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }

  addnewFile(blob: Blob, selectedFiles: any): Observable<any> {
    const formData = new FormData();
    formData.append('image', blob);
    console.log(formData);
    return this.http.post('/api/document/upload', formData).pipe(
      map((response) => response),
      tap((response) => console.log(response)),
      catchError(() => of())
    );
  }
}
