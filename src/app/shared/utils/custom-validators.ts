import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static atLeastOneShouldBeSelected(
    group: AbstractControl
  ): ValidationErrors | null {
    for (const key in group.value) {
      console.log(key, group.value[key]);
      if (group.value[key]) return null;
    }
    return { oneShouldBeSelected: true };
  }
  static passwordShouldBeEquals({
    value: { password, comfirmPassword },
  }: AbstractControl): ValidationErrors | null {
    if (password === comfirmPassword) return null;
    return { passwordsNotEquals: true };
  }
  static checkBirghDate(control: AbstractControl): ValidationErrors | null {
    if (Date.parse(control.value) < Date.now()) {
      return null;
    }
    return { birthDateError: true };
  }
}
