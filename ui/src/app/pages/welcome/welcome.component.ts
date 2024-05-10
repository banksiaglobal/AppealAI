import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SessionStorageService } from '../../service/localStorage.service';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports: [NzButtonModule, RouterLink, NzTypographyModule],
})
export class WelcomeComponent {
  constructor(private localStorage: SessionStorageService) {}

  clearStorageToStart() {
    this.localStorage.clean();
  }
}
