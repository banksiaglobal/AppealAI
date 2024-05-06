import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AiViewComponent } from '../ai-view/ai-view.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [CommonModule, AiViewComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
})
export class AiComponent {}
