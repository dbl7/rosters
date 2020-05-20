import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseReviewerComponent } from './phrase-reviewer.component';

describe('PhraseReviewerComponent', () => {
  let component: PhraseReviewerComponent;
  let fixture: ComponentFixture<PhraseReviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhraseReviewerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
