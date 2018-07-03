import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookiesService } from './cookies.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private cookieService: CookiesService,
    private router: Router
  ) {
  }

  canActivate() {
    const username = this.cookieService.getCookie('username');
    if (username) {
      return true;
    } else {
      this.router.navigate([ '/' ]);
      return false;
    }
  }
}
