import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Location } from '@angular/common';
import { ValidationService } from '../../services/validation.service';
import { UserService } from '../../services/user.service';
import { CookiesService } from '../../services/cookies.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  isLinear = true;

  userType: string;

  @Input() username: string;

  @Input() password: string;

  usernameFormControl = new FormControl('', [
    Validators.required,
    this.usernameValidator(),
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private location: Location,
    private router: Router,
    private validationService: ValidationService,
    private userService: UserService,
    private cookieService: CookiesService
  ) {
  }

  ngOnInit() {
  }

  submit(): void {
    switch (this.userType) {
      case '会员':
        if (this.userService.vipLogin(this.username, this.password)) {
          this.cookieService.setCookie('username', this.username, 1);
          this.router.navigateByUrl('vip');
        }
        break;
      case '场馆':
        if (this.userService.venLogin(this.username, this.password)) {
          this.cookieService.setCookie('username', this.username, 1);
          this.router.navigateByUrl('ven');
        }
        break;
      case '管理员':
        if (this.userService.mgrLogin(this.username, this.password)) {
          this.cookieService.setCookie('username', this.username, 1);
          this.router.navigateByUrl('mgr');
        }
        break;
      default:
      // exist = false;
    }
  }

  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): { [ key: string ]: any } => {

      const valid = this.isVip(control.value) || this.isVen(control.value) || this.isMgr(control.value);
      if (!valid) {
        return { 'invalidName': { value: control.value } };
      } else {
        let exist = false;
        switch (this.userType) {
          case '会员':
            exist = this.userService.vipCheck(control.value);
            break;
          case '场馆':
            exist = this.userService.venCheck(control.value);
            break;
          case '管理员':
            exist = this.userService.mgrCheck(control.value);
            break;
          default:
            exist = false;
        }
        return exist ? null : { 'notExist': { value: control.value } };
      }
    };
  }

  isVip(value: string): boolean {
    const isVip = this.validationService.isVip(value);
    if (isVip) {
      this.userType = '会员';
      return true;
    } else {
      return false;
    }
  }

  isVen(value: string): boolean {
    const isVip = this.validationService.isVen(value);
    if (isVip) {
      this.userType = '场馆';
      return true;
    } else {
      return false;
    }
  }

  isMgr(value: string): boolean {
    const isVip = this.validationService.isMgr(value);
    if (isVip) {
      this.userType = '管理员';
      return true;
    } else {
      return false;
    }
  }

}
