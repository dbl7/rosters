import { Injectable } from '@angular/core';
import { Validators, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable()
export class CustomValidators {
  public static noWhiteSpaces: RegExp = /^\S*$/;

  public static password: Validators = Validators.compose([
    Validators.required,
    CustomValidators.removeSpaces,
    Validators.minLength(6),
    Validators.pattern(CustomValidators.noWhiteSpaces),
  ]);

  public static removeSpaces(control: AbstractControl): ValidationErrors | null {
    if (control && control.value) {
      const trimmedValue = control.value.trim();
      if (control.value !== trimmedValue) {
        control.patchValue(trimmedValue);
        control.updateValueAndValidity();
      }
    }

    return null;
  }

  public static matchValidator(controlName: string, compareWith: string): ValidationErrors | null {
    return (form: FormGroup) => {
      const value = form.get(controlName).value;
      return value && value === form.get(compareWith).value ? null : { match: true };
    };
  }
}
