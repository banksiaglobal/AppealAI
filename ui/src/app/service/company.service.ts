import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ICompany } from '../interface/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanyList(): Observable<ICompany[]> {
    return this.http
      .get<{ companies: ICompany[] }>(`${environment.apiUrl}/company/`)
      .pipe(
        map((response) => response.companies),
        catchError(() => of())
      );
  }

  getCurrentCompanyInfo(companyId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/company/${companyId} `)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }

  addNewCompany(companyName: string): Observable<ICompany> {
    const body = {
      name: companyName,
    };
    return this.http.post<ICompany>(
      `${environment.apiUrl}/company/create`,
      body
    );
  }
}
