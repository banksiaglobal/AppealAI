import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnswerAiComponent } from './list-answer-ai.component';

describe('ListAnswerAiComponent', () => {
  let component: ListAnswerAiComponent;
  let fixture: ComponentFixture<ListAnswerAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnswerAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAnswerAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
