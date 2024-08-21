import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../../shared/utils/custom-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, CustomValidators.checkBirghDate]),
    passwords: new FormGroup({
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl()
    }, CustomValidators.passwordShouldBeEquals),
    hobbies: new FormGroup({
      tv: new FormControl(),
      music: new FormControl(),
      sport: new FormControl(),
      travel: new FormControl(),
    }, CustomValidators.atLeastOneShouldBeSelected),
  });
}
