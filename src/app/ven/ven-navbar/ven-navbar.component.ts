import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../shared/cookies.service';

@Component({
  selector: 'it-ven-navbar',
  templateUrl: './ven-navbar.component.html',
  styleUrls: [ './ven-navbar.component.scss' ]
})
export class VenNavbarComponent implements OnInit {

  username: string;

  constructor(
    private cookieService: CookiesService
  ) {
    this.username = '';
  }

  ngOnInit() {
    this.username = this.cookieService.getCookie('username');
  }

}
