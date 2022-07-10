import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';

@NgModule({
  declarations: [SignupFormComponent],
  imports: [CommonModule],
  exports: [SignupFormComponent],
})
export class SignupFormModule {}
