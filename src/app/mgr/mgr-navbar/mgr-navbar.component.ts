import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../shared/cookies.service';

@Component({
  selector: 'it-mgr-navbar',
  templateUrl: './mgr-navbar.component.html',
  styleUrls: [ './mgr-navbar.component.scss' ]
})
export class MgrNavbarComponent implements OnInit {

  username: string;

  constructor(
    private cookieService: CookiesService
  ) {
  }

  ngOnInit() {
    this.username = this.cookieService.getCookie('username');
    // this.username = 'cbb';
  }

}
