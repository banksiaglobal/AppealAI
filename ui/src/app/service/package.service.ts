import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import {
  ICreatePackage,
  IResponseAddPackage,
} from '../interface/package.interface';

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

  getListPackagesForCurrentCompany(
    companyId: string
  ): Observable<IResponseAddPackage[]> {
    return this.http
      .get<{ info: string; packages: IResponseAddPackage[] }>(
        `${environment.apiUrl}/api/package/all/${companyId}`
      )
      .pipe(
        map((response) => response.packages),
        catchError(() => of())
      );
  }

  addNewPackageForCompany(
    companyId: string,
    name: string,
    description: string
  ): Observable<any> {
    const body: ICreatePackage = {
      companyId: companyId,
      name: name,
      description: description,
    };
    return this.http.post<void>(
      `${environment.apiUrl}/api/package/create`,
      body
    );
  }
}
