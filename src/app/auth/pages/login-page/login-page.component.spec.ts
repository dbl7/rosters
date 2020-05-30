import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './login-page.component';
import { AppMaterialModule } from '@shared/material/app-material.module';
import { AuthService } from '@app/auth/auth.service';

const AuthServiceStub = {
  googleSignIn: () => {},
  emailLogin: () => {},
};

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [AppMaterialModule, RouterTestingModule, ReactiveFormsModule, NoopAnimationsModule],
      providers: [{ provide: AuthService, useValue: AuthServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
