import {Component, OnInit} from '@angular/core';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-ven-navbar',
  templateUrl: './ven-navbar.component.html',
  styleUrls: ['./ven-navbar.component.css']
})
export class VenNavbarComponent implements OnInit {

  username: string;

  constructor(
    private cookieService: CookiesService
  ) {
  }

  ngOnInit() {
    this.username = this.cookieService.getCookie('username');
    // this.username = '0000001';
  }

}
