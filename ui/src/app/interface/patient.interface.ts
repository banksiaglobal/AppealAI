export interface IPatient {
  birthDate: string;
  gender: string;
  id: string;
  name: string;
  surname: string;
  telephone: string;
}

export interface IPatientVisit {
  id: string;
  participant: { fullName: string; id: string };
  patient: { fullName: string; id: string };
  period: {
    start: string;
    end: string;
  };
  serviceProvider: { id: string; fullName: string };
  status: string;
  type: string;
  typeCode: string;
}
