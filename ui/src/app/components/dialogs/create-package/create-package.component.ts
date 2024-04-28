import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzHeaderComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DialogRefDel } from '../create-company/dialog-ref-del';
import { DIALOG_DATA } from '../create-company/dialog-tokens';
import { ICompany } from '../../../interface/company.interface';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-create-package',
  standalone: true,
  imports: [
    NzModalModule,
    CommonModule,
    NzHeaderComponent,
    NzLayoutModule,
    NzFlexModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.scss',
})
export class CreatePackageComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private dialogRefDel: DialogRefDel,
    @Inject(DIALOG_DATA) public data: ICompany[]
  ) {}
  selectedFiles: any;
  docsForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    listDocs: FormControl<File | null>;
    companyId: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    listDocs: new FormControl<File | null>(null, [Validators.required]),
    companyId: ['', [Validators.required]],
  });

  close() {
    console.log(this.data);
    this.dialogRefDel.close(undefined);
  }

  save() {
    this.dialogRefDel.close(this.docsForm.value);
  }

  addListDocs(event: Event) {
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
  selectCompany(id: number): void {
    console.log(id);
    if (id) {
      this.docsForm.value.companyId = String(id);
    }
    console.log(this.docsForm.value);
  }
}
