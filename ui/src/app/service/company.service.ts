import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanyList(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/api/company`).pipe(
      map((response) => response),
      catchError(() => of())
    );
  }

  getCurrentCompanyInfo(companyId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/api/company/${companyId} `)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }

  addNewCompany(companyName: string): Observable<any> {
    return this.http.post<void>(
      `${environment.apiUrl}/api/company/create`,
      companyName
    );
  }
}
