import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getListPactients(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/fhir/patients`).pipe(
      map((response) => response),
      catchError(() => of())
    );
  }

  getListAppointmentsForPatiens(patientID: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.apiUrl}/fhir/encounters/${patientID}`)
      .pipe(
        map((response) => response),
        catchError(() => of())
      );
  }
}
