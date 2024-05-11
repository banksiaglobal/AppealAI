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

  getListPackagesForCurrentCompany(
    companyId: string
  ): Observable<IResponseAddPackage[]> {
    return this.http
      .get<{ packages: IResponseAddPackage[] }>(
        `${environment.apiUrl}/package/all/${companyId}`
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
    return this.http.post<void>(`${environment.apiUrl}/package/create`, body);
  }

  deleteCurrentPackage(packageId: string) {
    return this.http.delete(`${environment.apiUrl}/package/${packageId}`);
  }
}
