import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireQuestionsComponent } from './fire-questions.component';

describe('FireQuestionsComponent', () => {
  let component: FireQuestionsComponent;
  let fixture: ComponentFixture<FireQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
