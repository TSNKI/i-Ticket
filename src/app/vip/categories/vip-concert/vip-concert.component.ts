import { Component, OnInit, Sanitizer, ViewChild } from '@angular/core';
import {
  act_special,
  beijing,
  carousel,
  concert_news, guangzhou,
  hots,
  newest_s,
  rock_s,
  shanghai,
  upcoming_s
} from "./vip-concert";
import { Router } from "@angular/router";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'it-vip-concert',
  templateUrl: './vip-concert.component.html',
  styleUrls: [ './vip-concert.component.scss' ]
})
export class VipConcertComponent implements OnInit {

  specials = act_special;
  news = concert_news;
  tours = carousel;
  hots = hots;
  newest_s = newest_s;
  upcoming_s = upcoming_s;
  rock_s = rock_s;
  beijing = beijing;
  shanghai = shanghai;
  guangzhou = guangzhou;


  constructor(private router: Router,
              private iconRegistry: MatIconRegistry,
              private sanitiser: DomSanitizer) {

    iconRegistry.addSvgIcon('more_city',
      sanitiser.bypassSecurityTrustResourceUrl('assets/icons/ic_more_city.svg'));

  }

  ngOnInit() {
  }

  moreCity(): void {
    this.router.navigateByUrl("search");
  }

}
