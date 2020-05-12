import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CustomValidators } from '@core/validators/validators';
import { CrossFieldErrorMatcher } from '@core/error-matchers/error-matchers';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'rs-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent implements OnInit {
  public signUpForm: FormGroup;
  public showPassword: boolean = true;
  public showConfirmationPassword: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public crossFieldErrorMatcher: CrossFieldErrorMatcher,
  ) {}

  public ngOnInit(): void {
    this.initSignUpForm();
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.signUpForm.get(controlName).hasError(errorName);
  }

  public signUp(): void {
    if (this.signUpForm.valid) {
      this.authService.emailSignUp(this.signUpForm.value);
    }
  }

  private initSignUpForm(): void {
    this.signUpForm = this.formBuilder.group(
      {
        email: [null, Validators.compose([Validators.required, Validators.email])],
        password: [null, CustomValidators.password],
        confirmPassword: [null, Validators.required],
      },
      { validators: CustomValidators.matchValidator('password', 'confirmPassword') },
    );
  }
}
