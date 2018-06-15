import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatStepper } from '@angular/material';
import { MyErrorStateMatcher } from '../../user/login/login.component';
import { UserService } from '../../services/user.service';
import { CookiesService } from '../../services/cookies.service';
import { ValidationService } from '../../services/validation.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vip-login',
  templateUrl: './vip-login.component.html',
  styleUrls: [ './vip-login.component.css' ]
})
export class VipLoginComponent implements OnInit {
  isLinear = true;

  userType: string;

  usernameForm = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordForm = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private dialogRef: MatDialogRef<VipLoginComponent>,
    private location: Location,
    private router: Router,
    private validationService: ValidationService,
    private userService: UserService,
    private cookieService: CookiesService
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
        stepper.next();
      }
    }
  }

  submit(): void {
    const username = this.usernameForm.value;
    const password = this.passwordForm.value;
    this.cookieService.setCookie('username', this.usernameForm.value, 1);
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }
}
