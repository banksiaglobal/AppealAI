import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
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

  addNewPackageForCompany(
    name: string,
    description: string,
    companyId: number
  ): Observable<any> {
    const body = { name: name, description: description, companyId: companyId };
    return this.http.post<void>(
      `${environment.apiUrl}/api/package/create`,
      body
    );
  }
}
