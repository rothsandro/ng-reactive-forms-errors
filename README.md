# Handle multiple validation errors with Reactive Forms + Angular Material

This is a simple demo app for the blog post [Handle multiple validation errors with Reactive Forms + Angular Material](http://sandroroth.com/blog/angular-reactive-forms-errors) that shows how to handle form fields with multiple validation error messages.

Without the directive you would probably do something like this:

```html
<mat-form-field>
  <mat-label>E-mail</mat-label>
  <input type="email" matInput [formControl]="form.controls.email" />
  <mat-error *ngIf="form.controls.email.hasError('required')">
    E-mail is required
  </mat-error>
  <mat-error *ngIf="form.controls.email.hasError('email')">
    Enter a valid e-mail
  </mat-error>
</mat-form-field>
```

With the directive implemented in this demo app you can do this:

```html
<mat-form-field>
  <mat-label>E-mail</mat-label>
  <input type="email" matInput [formControl]="form.controls.email" />
  <mat-error *hasError="'required'">E-mail is required</mat-error>
  <mat-error *hasError="'email'">Enter a valid e-mail</mat-error>
</mat-form-field>
```

[Read my blog post](http://sandroroth.com/blog/angular-reactive-forms-errors) for more information.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.
