import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SessionStorageService } from '../../service/localStorage.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NzButtonModule, RouterLink],
})
export class WelcomeComponent {
  constructor(private localStorage: SessionStorageService) {}

  clearStorageToStart() {
    this.localStorage.clean();
  }
}
