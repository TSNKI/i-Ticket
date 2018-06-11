import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-vip-navbar',
  templateUrl: './vip-navbar.component.html',
  styleUrls: [ './vip-navbar.component.css' ]
})
export class VipNavbarComponent implements OnInit {

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
