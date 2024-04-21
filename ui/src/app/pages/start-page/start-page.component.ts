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
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent {
  constructor(private fb: NonNullableFormBuilder, private http: HttpClient) {}
  packagesList: string[] = ['test', 'test', 'test', 'test'];
  selectedCompany: string | undefined = undefined;
  isLoading = false;

  selectedFiles: any;
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
    letter: FormControl<File | null>;
  }> = this.fb.group({
    company: ['', [Validators.required]],
    package: ['', [Validators.required]],
    letter: new FormControl<File | null>(null),
  });

  addLetter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedFiles = target.files as FileList;
    console.log(this.selectedFiles);

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && reader.result) {
        const blob = new Blob([reader.result], {
          type: this.selectedFiles[0].type,
        });
        console.log(blob);
        var element = document.querySelector('p');
        var field = document.getElementById('listDocsItem');

        if (element) {
          for (let i = 0; i < this.selectedFiles.length; i++) {
            // Removed the function declaration as it's not needed
            let f = this.selectedFiles[i]; // Changed 'this.files[i]' to 'this.selectedFiles[i]'
            element.innerHTML = `${element.innerHTML} ${f.name} ${f.size} ${f.type}`; // Fixed the concatenation of file details
          }
        }
      } else {
        console.error('File could not be read.');
      }
    };

    reader.readAsArrayBuffer(this.selectedFiles[0]); // Changed 'this.selectedFile' to 'this.selectedFiles[0]'
  }

  submitDocs(blob: Blob): void {
    if (this.selectedFiles) {
      const formData = new FormData();
      formData.append('image', blob, this.selectedFiles.name);
      this.http.post('/api/upload', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }
  }

  submitForm() {
    console.log(this.documentsForm.value);
  }
}
