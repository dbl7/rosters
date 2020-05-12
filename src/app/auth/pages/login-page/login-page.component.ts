import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'rs-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public showPassword: boolean = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initSignUpForm();
  }

  public googleSignIn(): void {
    this.authService.googleSignIn();
  }

  public emailLogin(): void {
    if (this.loginForm.valid) {
      this.authService.emailLogin(this.loginForm.value);
    }
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.get(controlName).hasError(errorName);
  }

  private initSignUpForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }
}
