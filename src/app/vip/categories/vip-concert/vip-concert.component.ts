import {Component, OnInit} from '@angular/core';
import {VipHeadbarComponent} from "../../vip-header/vip-header.component";
import {VipFooterComponent} from "../../vip-footer/vip-footer.component";
import { act_special, concert_news } from "./vip-concert";

@Component({
  selector: 'it-vip-concert',
  templateUrl: './vip-concert.component.html',
  styleUrls: ['./vip-concert.component.scss']
})
export class VipConcertComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  specials = act_special;
  news = concert_news;

}
