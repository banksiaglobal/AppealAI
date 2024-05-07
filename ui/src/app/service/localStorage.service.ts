import { Injectable } from '@angular/core';

enum DATA {
  PACKAGE = 'package_id',
  PACKAGE_NAME = 'package_name',
  COMPANY = 'company_id',
  COMPANY_NAME = 'company_name',
}

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  clean(): void {
    sessionStorage.clear();
  }

  public saveCompany(id: string, name: string): void {
    this.clean();
    sessionStorage.setItem(DATA.COMPANY, JSON.stringify(String(id)));
    sessionStorage.setItem(DATA.COMPANY_NAME, JSON.stringify(name));
  }

  public savePackage(id: string, name: string): void {
    sessionStorage.setItem(DATA.PACKAGE, JSON.stringify(id));
    sessionStorage.setItem(DATA.PACKAGE_NAME, JSON.stringify(name));
  }

  public getPackageName(): string | null {
    const item = sessionStorage.getItem(DATA.PACKAGE_NAME);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  public getPackageId(): string | null {
    const item = sessionStorage.getItem(DATA.PACKAGE);

    if (item) {
      return JSON.parse(item);
    }

    return null;
  }

  getCompanyName(): string | null {
    const companName = sessionStorage.getItem(DATA.COMPANY_NAME);
    if (companName) {
      return JSON.parse(companName);
    }

    return null;
  }

  public getCompanyId(): string | null {
    const companyId = sessionStorage.getItem(DATA.COMPANY);
    if (companyId) {
      return JSON.parse(companyId);
    }

    return null;
  }

  deletePackage() {
    sessionStorage.removeItem(DATA.PACKAGE_NAME);
    sessionStorage.removeItem(DATA.PACKAGE);
  }
}
