import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenPasswordValidator } from './signup-form.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupFormComponent {
  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, forbiddenPasswordValidator]],
  });

  constructor(private fb: FormBuilder) {}
}
