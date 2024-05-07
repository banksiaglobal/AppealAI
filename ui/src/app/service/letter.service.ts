import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(private http: HttpClient) {}

  getCurrentPackageInfo(packageId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/api/package/${packageId}`)
      .pipe(map((response) => response));
  }

  getListPackagesForCurrentCompany(companyId: number): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}/package/all/${companyId}`)
      .pipe(map((response) => response));
  }

  addnewFile(data: any): Observable<any> {
    console.log(data);

    return this.http
      .post<any>(`${environment.apiUrl}/document/upload`, data)
      .pipe(map((response) => response));
  }
}
