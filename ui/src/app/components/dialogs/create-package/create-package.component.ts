import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
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
import { NzSelectModule } from 'ng-zorro-antd/select';
interface FormValues {
  name: string;
  description: string;
}
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
  constructor(private fb: NonNullableFormBuilder) {}

  @Output() createNewPackage = new EventEmitter<{
    name: string;
    description: string;
  }>();

  selectedFiles: FileList;
  docsForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  formValues: FormValues = {
    name: '',
    description: '',
  };
  save() {
    const { name } = this.docsForm.value;
    if (name !== undefined) {
      this.createNewPackage.emit(this.docsForm.value);
    }
  }
}
