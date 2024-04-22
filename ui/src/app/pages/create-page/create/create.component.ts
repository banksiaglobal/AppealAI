import { Component, OnInit } from '@angular/core';
import { CreateViewComponent } from '../create-view/create-view.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CreateViewComponent, CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  public typeOfObj: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.typeOfObj = this.route.snapshot.queryParamMap.get('type');
  }
}
