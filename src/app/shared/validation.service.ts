import { Injectable } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  isVip(value: string) {
    const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return reg.test(value);
  }

  isVen(value: string) {
    const reg = /^[0-9]{7}$/;
    return reg.test(value);
  }

  isMgr(value: string) {
    const reg = /^M[0-9]{7}$/;
    return reg.test(value);
  }

  constructor() {
  }
}

/** Error when invalid control is submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && isSubmitted && (control.dirty || control.touched));
  }
}
