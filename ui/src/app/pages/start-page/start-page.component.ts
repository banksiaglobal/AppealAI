import { Component } from '@angular/core';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start-page',
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
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent {
  constructor(private fb: NonNullableFormBuilder, private http: HttpClient) {}
  packagesList: string[] = ['test1', 'test2', 'test3', 'test4'];
  selectedCompany: string | undefined = undefined;
  isLoading = false;

  selectedFile: any;

  fileUrl: SafeResourceUrl = '';

  listInsuranceOrg: string[] = [
    'test company1',
    'test company2',
    'test company3',
    'test company4',
  ];

  documentsForm: FormGroup<{
    company: FormControl<string>;
    package: FormControl<string>;
    letter: FormControl<File | null>; // Corrected FormControl type
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
    letter: new FormControl<File | null>(null, [Validators.required]), // Corrected FormControl initialization
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

  createNewObj(typeObj: string) {}
}
