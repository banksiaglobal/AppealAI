import { Injectable } from '@angular/core';
import { IResponseAddPackage } from '../interface/package.interface';

enum DATA {
  PACKAGE = 'package',
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
    console.log(id);
    this.clean();
    sessionStorage.setItem(DATA.COMPANY, JSON.stringify(String(id)));
    sessionStorage.setItem(DATA.COMPANY_NAME, JSON.stringify(name));
  }

  public savePackage(info: IResponseAddPackage): void {
    sessionStorage.removeItem(DATA.PACKAGE);
    sessionStorage.setItem(DATA.PACKAGE, JSON.stringify(info));
  }

  public getPackage(): string {
    const item = sessionStorage.getItem(DATA.PACKAGE);

    if (item && item != 'undefined') {
      return JSON.parse(item);
    }

    return '';
  }

  getCompanyName() {
    const companName = sessionStorage.getItem(DATA.COMPANY_NAME);
    if (companName) {
      return JSON.parse(companName);
    }

    return '';
  }

  public getCompanyId(): string {
    const companyId = sessionStorage.getItem(DATA.COMPANY);
    if (companyId) {
      return JSON.parse(companyId);
    }

    return '';
  }

  deletePackage() {
    sessionStorage.removeItem(DATA.PACKAGE);
  }
}
