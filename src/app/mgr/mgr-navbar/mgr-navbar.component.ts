import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-mgr-navbar',
  templateUrl: './mgr-navbar.component.html',
  styleUrls: [ './mgr-navbar.component.css' ]
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
