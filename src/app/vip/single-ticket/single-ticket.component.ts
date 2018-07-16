import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { CookiesService } from '../../shared/cookies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../shared/user.service';
import { MatChipInputEvent, MatIconRegistry } from '@angular/material';
import { CityService } from '../../shared/city.service';
import { SearchlistService } from '../../shared/searchlist.service';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../../shared/fetch.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'it-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: [ './single-ticket.component.scss' ]
})
export class SingleTicketComponent implements OnInit {
  id: number;
  ticket: {
    id: number,
    src: string,
    name: string,
    state: number,   // 012 预定中,售票中,已售罄
    displayName: string,
    price: string,
    description: string,
    vuene: string,
    vuenename: string,
    location: string,
    city: string,     // 排序之城市/类型/时间
    types: string,
    begintime: string,
    endtime: string,
    hasseats: boolean, // 三种图标
    hascode: boolean,
    hassafety: boolean,
    buytype: number,   // 012 预定,订票,缺票登记
    datetochoose: string[],
    pricetochoose: number[],
    priceavailabliy: boolean[],
  };
  datechoosed: number;
  item: any;
  itemlist: any[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(
    private cookieService: CookiesService,
    private eventService: EventService,
    private userService: UserService,
    private cityService: CityService,
    private searchService: SearchlistService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private fetchService: FetchService,
    private formBuilder: FormBuilder,
  ) {
    iconRegistry.addSvgIcon(
      'code',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_code2.svg'));
    iconRegistry.addSvgIcon(
      'safety',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_safety.svg'));
    iconRegistry.addSvgIcon(
      'seats',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_seats2.svg'));
  }

  ngOnInit() {
    this.id = 1;
    this.datechoosed = 0;
    // this.itemlist = [];
    // this.itemlist.push(this.item);
    this.itemlist = [];
    if (this.activatedRoute.snapshot.queryParams[ 'id' ] != null) {
      this.id = this.activatedRoute.snapshot.queryParams[ 'id' ];
    }
    this.fetchService.setFetching();
    this.searchService.getSingleTicket(this.id)
      .subscribe(res => {
        this.ticket = res[ 0 ];
        this.fetchService.setFetched();
      });
    // this.firstFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.thirdFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    // this.fourthFormGroup = this.formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  setDateChoice(date) {
    if (this.datechoosed !== date) {
      this.item = null;
      this.datechoosed = date;
    }
  }

  addPrice(price) {
    if (this.datechoosed === -1) {

    } else {
      const date = this.ticket.datetochoose[ this.datechoosed ];
      let has = false;
      for (const i of this.itemlist) {
        if (i.date === date && i.price === price) {
          i.number += 1;
          has = true;
        }
      }
      if (!has) {
        this.itemlist.push({
          date: date,
          price: price,
          number: 1,
        });
      }
    }
  }

  add(item) {
    this.itemlist[ item ].number += 1;
  }

  sub(item) {
    this.itemlist[ item ].number -= 1;
    if (this.itemlist[ item ].number <= 0) {
      this.itemlist.splice(item, 1);
    }
  }

  delete(item) {
    this.itemlist.splice(item, 1);
  }
}
