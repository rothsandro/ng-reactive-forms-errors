import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupFormModule } from './signup-form/signup-form.module';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SignupFormModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useFactory: (): MatFormFieldDefaultOptions => ({
        appearance: 'fill',
      }),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
