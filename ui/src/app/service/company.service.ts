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

  getCompanyList(): Observable<any> {
    // return this.http.get<any>(`${environment.apiUrl}/api/company`).pipe(
    //   map((response) => response),
    //   catchError(() => of())
    // );
    return of([
      { name: 'new', id: 50, UUIDFHIR: 'testnumber123456789987654321' },
    ]);
  }

  getCurrentCompanyInfo(companyId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/api/company/${companyId} `)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }

  addNewCompany(companyName: string): Observable<ICompany> {
    const body = {
      name: companyName,
      uuidfhir: '3d10019f-c88e-3de5-9916-6107b9c0263d',
    };
    return this.http.post<ICompany>(
      `${environment.apiUrl}/api/company/create`,
      body
    );
  }
}
