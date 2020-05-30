import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { SignUpPageComponent } from './sign-up-page.component';
import { AppMaterialModule } from '@shared/material/app-material.module';
import { AuthService } from '@app/auth/auth.service';

describe('SignUpPageComponent', () => {
  let component: SignUpPageComponent;
  let fixture: ComponentFixture<SignUpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpPageComponent],
      imports: [NoopAnimationsModule, AppMaterialModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: { authService: () => {} } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
