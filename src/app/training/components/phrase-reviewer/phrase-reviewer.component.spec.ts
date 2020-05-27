import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';

import { PhraseReviewerComponent } from './phrase-reviewer.component';

const phrases = ['phrase 1', 'phrase 2', 'phrase 3'];

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
    component.phrases = phrases;

    component.ngOnChanges({
      phrases: new SimpleChange(null, component.phrases, true),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a random phrase', () => {
    expect(phrases).toContain(component.phrase);
  });

  it('should show the next phrase', () => {
    component.nextPhrase();
    expect(component.phrase).toBe(component.phrases[1]);
  });

  it('should show the previous phrase', () => {
    component.prevPhrase();
    expect(component.phrase).toBe(component.phrases[2]);
  });

  it('should show the first phrase after the last one', () => {
    component.nextPhrase();
    component.nextPhrase();
    component.nextPhrase();
    expect(component.phrase).toBe(component.phrases[0]);
  });
});
