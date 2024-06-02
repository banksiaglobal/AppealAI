import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IPatient } from '../interface/patient.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getListPacients(): Observable<IPatient[]> {
    return this.http
      .get<{ patients: IPatient[] }>(`${environment.apiUrl}/fhir/patients`)
      .pipe(
        map((response) => response.patients),
        catchError(() => of())
      );
  }

  getListAppointmentsForPatiens(patientID: string): Observable<any[]> {
    return this.http
      .get<{ encounters: any[] }>(
        `${environment.apiUrl}/fhir/encounters/${patientID}`
      )
      .pipe(
        map((response) => response.encounters),
        catchError(() => of())
      );
  }
}
