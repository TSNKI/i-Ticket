import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-ven-navbar',
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
