import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { ICompany } from '../../../interface/company.interface';
import { ICreatePackage } from '../../../interface/package.interface';
import { CompanyService } from '../../../service/company.service';
import { PackageService } from '../../../service/package.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-letter-page',
  standalone: true,
  imports: [
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzPageHeaderModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    CommonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './letter-page.component.html',
  styleUrl: './letter-page.component.scss',
})
export class LetterPageComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private http: HttpClient,
    private companyService: CompanyService,
    private packageService: PackageService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  packagesList: string[] = ['test1', 'test2', 'test3', 'test4'];
  selectedCompany: string | undefined = undefined;
  isLoading = false;
  isVisible = false;
  selectedFile: any;

  public isErrorRequest$: Observable<boolean>;

  fileUrl: SafeResourceUrl = '';
  listInsuranceOrg$: Observable<ICompany[]>;
  packagesList$: Observable<any[]>;

  listInsuranceOrg: ICompany[] = [
    { name: 'new', id: 50, UUIDFHIR: 'testnumber123456789987654321' },
    { name: 'new 1', id: 51, UUIDFHIR: 'testnumber123456789987654321' },
  ];

  documentsForm: FormGroup<{
    company: FormControl<string>;
    package: FormControl<string>;
    letter: FormControl<File | null>;
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
    letter: new FormControl<File | null>(null, [Validators.required]),
  });

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

  submitForm() {
    console.log(this.documentsForm.value);
  }

  deleteInfoItem(typeInfo: string) {
    switch (typeInfo) {
      case 'company':
        this.documentsForm.patchValue({
          company: '',
        });

        break;
      case 'package':
        this.documentsForm.patchValue({
          package: '',
        });
        break;
      default:
        this.documentsForm.patchValue({
          letter: null,
        });
    }
  }

  private addNewPackage(body: ICreatePackage) {
    this.packageService
      .addNewPackageForCompany(body.companyId, body.name, body.description)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((error: any) => {
          this.isErrorRequest$ = of(true);
          return throwError(() => error);
        })
      )
      .subscribe();
    this.isErrorRequest$ = of(false);
  }

  private getData() {
    this.listInsuranceOrg$ = this.companyService
      .getCompanyList()
      .pipe(map((data) => data));
  }

  onSelectCompany(companyId: number) {
    if (companyId) {
      this.packagesList$ = this.packageService
        .getListPackagesForCurrentCompany(companyId)
        .pipe();
    }
    this.packagesList$.subscribe((data) => console.log(data));
  }
}
