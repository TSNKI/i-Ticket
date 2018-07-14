import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { CookiesService } from '../../shared/cookies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../shared/user.service';
import { MatIconRegistry } from '@angular/material';
import { CityService } from '../../shared/city.service';
import { SearchlistService } from '../../shared/searchlist.service';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from '../../shared/fetch.service';
@Component({
  selector: 'it-vip-search',
  templateUrl: './vip-search.component.html',
  styleUrls: [ './vip-search.component.scss' ]
})
export class VipSearchComponent implements OnInit {
  searchString: string;
  toppings: { id: number, name: string, displayName: string }[];
  typeSelection: { id: number, state: boolean }[];
  categories: { id: number, name: string, displayName: string }[];
  cities: { id: number, name: string, displayName: string }[];
  selectedCity: string;
  selectedType: string;
  selectedCategory: string;
  selectedTime: string;
  selectedRank: string;
  searchReasults: {
    id: number,
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
    items: any[]
  }[];

  constructor(
    private cookieService: CookiesService,
    private eventService: EventService,
    private userService: UserService,
    private cityService: CityService,
    private searchService: SearchlistService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private fetchService: FetchService
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
    this.categories = this.eventService.getCategories;
    this.cities = this.cityService.getCities;
    this.selectedCity = '全部';
    this.selectedType = 'all';
    this.selectedCategory = '全部';
    this.selectedTime = 'all';
    this.selectedRank = 'default';
    this.searchString = this.activatedRoute.snapshot.queryParams[ 'name' ];
    this.updateSearchList();
    // or shortcut Type Casting
    // (<any> this.activatedRoute.snapshot.params).id
    this.toppings = [
      {
        id: 1,
        name: 'all',
        displayName: '全部',
      },
      {
        id: 2,
        name: 'code',
        displayName: '有电子票',
      },
      {
        id: 3,
        name: 'safety',
        displayName: '有退票保险',
      },
      {
        id: 4,
        name: 'seats',
        displayName: '支持在线选座',
      },
    ];

  }

  updateCity(item) {
    this.selectedCity = item;
    console.log(item);
    this.updateSearchList();
  }

  updateCate(item) {
    this.selectedCategory = item;
    console.log(item);
    this.updateSearchList();
  }

  updateType(item) {
    this.selectedType = item;
    console.log(item);
    this.updateSearchList();
  }

  updateTime(item) {
    this.selectedTime = item;
    console.log(item);
    this.updateSearchList();
  }

  updateRank(item) {
    this.selectedRank = item;
    console.log(item);
    this.updateSearchList();
  }

  updateSearchList() {
    this.searchReasults = [];
    this.fetchService.setFetching();
    this.searchService.getsearchlist(this.selectedCity, this.selectedCategory, this.selectedType)
      .subscribe(res => {
        this.searchReasults = res;
        this.fetchService.setFetched();
      });

  }


}
