import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { of } from 'rxjs';

import { PhraseFormPageComponent } from './phrase-form-page.component';
import { ListService } from '@app/list/list.service';
import { AppMaterialModule } from '@shared/material/app-material.module';

describe('PhraseFormPageComponent', () => {
  let component: PhraseFormPageComponent;
  let fixture: ComponentFixture<PhraseFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhraseFormPageComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, AppMaterialModule, NoopAnimationsModule],
      providers: [{ provide: ListService, useValue: { getLists$: () => of([]) } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
