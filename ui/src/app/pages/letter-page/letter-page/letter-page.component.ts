import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable, map, of, tap } from 'rxjs';
import { ICompany } from '../../../interface/company.interface';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { LetterPageViewComponent } from '../../letter-page-view/letter-page-view.component';
import { SessionStorageService } from '../../../service/localStorage.service';
import { IResponseAddPackage } from '../../../interface/package.interface';

@Component({
  selector: 'app-letter-page',
  standalone: true,
  imports: [CommonModule, LetterPageViewComponent],
  templateUrl: './letter-page.component.html',
  styleUrl: './letter-page.component.scss',
})
export class LetterPageComponent {
  constructor(
    private http: HttpClient,
    private companyService: CompanyService,
    private packageService: PackageService,
    private localStorage: SessionStorageService
  ) {}
  ngOnInit(): void {
    this.localStorage.clean();
    this.getData();
  }

  isLoading = false;
  isVisible = false;
  selectedFile: any;

  fileUrl: SafeResourceUrl = '';

  currentCompany$: Observable<ICompany>;

  packagesList$: Observable<IResponseAddPackage[]>;

  listInsuranceOrg$: Observable<ICompany[]>;

  addLetter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedFile = target.files as FileList;
    console.log(this.selectedFile);

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && reader.result) {
        const blob = new Blob([reader.result], {
          type: this.selectedFile[0].type,
        });
        console.log(blob);
        var element = document.querySelector('p');

        if (element) {
          for (let i = 0; i < this.selectedFile.length; i++) {
            // Removed the function declaration as it's not needed
            let f = this.selectedFile[i]; // Changed 'this.files[i]' to 'this.selectedFiles[i]'
            element.innerHTML = `${element.innerHTML} ${f.name} ${f.size} ${f.type}`; // Fixed the concatenation of file details
          }
        }
      } else {
        console.error('File could not be read.');
      }
    };

    reader.readAsArrayBuffer(this.selectedFile[0]); // Changed 'this.selectedFile' to 'this.selectedFiles[0]'
  }

  submitDocs(blob: Blob): void {
    if (this.selectedFile) {
      console.log(blob, this.selectedFile);
      const formData = new FormData();
      formData.append('image', blob, this.selectedFile.name);
      this.http.post('/api/upload', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
  }

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
  }

  onSelectCompany(company: ICompany) {
    if (company) {
      this.packagesList$ = this.packageService
        .getListPackagesForCurrentCompany(company.id)
        .pipe(tap(() => this.saveCurrentCompany(company)));
    }
  }

  private saveCurrentCompany(company: ICompany) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
  }
}
