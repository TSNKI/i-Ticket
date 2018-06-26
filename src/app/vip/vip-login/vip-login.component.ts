import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef, MatStepper } from '@angular/material';
import { UserService } from '../../shared/user.service';
import { CookiesService } from '../../shared/cookies.service';
import { ValidationService } from '../../shared/validation.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'it-vip-login',
  templateUrl: './vip-login.component.html',
  styleUrls: [ './vip-login.component.scss' ]
})
export class VipLoginComponent implements OnInit {
  isLinear = true;

  usernameForm = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordForm = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private dialogRef: MatDialogRef<VipLoginComponent>,
    private location: Location,
    private router: Router,
    private validationService: ValidationService,
    private userService: UserService,
    private cookieService: CookiesService,
  ) {
  }

  ngOnInit() {
  }

  next(stepper: MatStepper): void {
    if (!this.usernameForm.hasError('email') && !this.usernameForm.hasError('required')) {
      const userNotExist = !this.userService.vipCheck(this.usernameForm.value);
      if (userNotExist) {
        this.usernameForm.setErrors({ 'userNotExist': true });
      } else {
        this.usernameForm.disable();
        stepper.next();
        this.setFocus('password-input');
      }
    }
  }

  previous(stepper: MatStepper): void {
    this.usernameForm.setValue('');
    this.usernameForm.enable();
    stepper.previous();
    this.setFocus('username-input');
  }

  setFocus(id: string) {
    const targetElem = document.getElementById(id);
    if (targetElem) {
      setTimeout(function waitTargetElem() {
        if (document.body.contains(targetElem)) {
          targetElem.focus();
        } else {
          setTimeout(waitTargetElem, 100);
        }
      }, 100);
    }
  }

  submit(): void {
    const username = this.usernameForm.value;
    const password = this.passwordForm.value;
    if (this.userService.vipLogin(username, password)) {
      this.cookieService.setCookie('username', this.usernameForm.value, 1);
      this.close();
    } else {
      this.passwordForm.setErrors({ 'passwordWrong': true });
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
