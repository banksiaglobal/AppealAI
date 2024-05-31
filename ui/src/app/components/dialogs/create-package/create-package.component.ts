import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
    ReactiveFormsModule,
  ],
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.scss',
})
export class CreatePackageComponent implements OnChanges {
  constructor(private fb: NonNullableFormBuilder) {}
  isVisible = false;
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['packageName'].currentValue) {
      const isPackage = changes['packageName'].currentValue !== null;
      if (isPackage == true || this.docsForm.controls['name']) {
        this.docsForm.controls['name'].disable();
        this.docsForm.controls['description'].disable();
      }
    } else {
      this.docsForm.controls['name'].enable();
      this.docsForm.controls['description'].enable();
    }
  }

  @Input() packageName: string | null;

  @Output() createNewPackage = new EventEmitter<{
    name: string;
    description: string;
  }>();

  docsForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
  });

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  save() {
    const { name } = this.docsForm.value;

    if (name !== undefined) {
      this.createNewPackage.emit(this.docsForm.value);
    }
    this.isVisible = false;
  }
}
