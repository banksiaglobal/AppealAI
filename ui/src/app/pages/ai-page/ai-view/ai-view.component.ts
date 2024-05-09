import { Component } from '@angular/core';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-view',
  standalone: true,
  imports: [NzResultModule, NzButtonModule, RouterLink],
  templateUrl: './ai-view.component.html',
  styleUrl: './ai-view.component.scss',
})
export class AiViewComponent {}
