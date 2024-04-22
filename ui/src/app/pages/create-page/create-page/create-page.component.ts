import { Component, OnInit } from '@angular/core';
import { CreatePageViewComponent } from '../create-page-view/create-page-view.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [CreatePageViewComponent, CommonModule],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss',
})
export class CreatePageComponent implements OnInit {
  typeOfObj: string | null;

  constructor(private route: ActivatedRoute) {
    this.typeOfObj = this.route.snapshot.queryParamMap.get('type');
  }

  ngOnInit(): void {
    console.log(this.typeOfObj);
  }
}
