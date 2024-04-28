import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { CreateCompanyComponent } from '../../../components/dialogs/create-company/create-company.component';

@Component({
  selector: 'app-start-page-view',
  standalone: true,
  imports: [
    CommonModule,
    NzStepsModule,
    NzButtonModule,
    NzLayoutModule,
    CreateCompanyComponent,
  ],
  templateUrl: './start-page-view.component.html',
  styleUrl: './start-page-view.component.scss',
})
export class StartPageViewComponent {
  @Output() createNewCompany = new EventEmitter<string>();
  current = 0;

  index = 1;

  status = 'process';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 1;
        break;
      }
      case 1: {
        this.index = 2;
        break;
      }
      case 2: {
        this.index = 3;
        break;
      }
      default: {
        this.index = 0;
      }
    }
  }
}
