import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Location} from '@angular/common';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    function isVip(value: string) {
      const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      return reg.test(value);
    }

    function isVen(value: string) {
      const reg = /^[0-9]{7}$/;
      return reg.test(value);
    }

    function isMgr(value: string) {
      const reg = /^M[0-9]{7}$/;
      return reg.test(value);
    }

    const valid = isVip(control.value) || isVen(control.value) || isMgr(control.value);
    return valid ? null : {'invalidName': {value: control.value}};
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stepIndex = 0;

  @Input() username: string;

  @Input() password: string;

  usernameFormControl = new FormControl('', [
    Validators.required,
    usernameValidator(),
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  nextStep(): void {
    this.stepIndex = 1;
  }

  submit(): void {
    alert(this.username);
  }
}
