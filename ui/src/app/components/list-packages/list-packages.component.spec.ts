import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPackagesComponent } from './list-packages.component';

describe('ListPackagesComponent', () => {
  let component: ListPackagesComponent;
  let fixture: ComponentFixture<ListPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPackagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
