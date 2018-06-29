import {
  AfterContentInit,
  AfterViewInit,
  Component, ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatAccordion, MatIconRegistry } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FetchService } from '../../shared/fetch.service';
import { TocService } from '../../shared/toc.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { AsYouType, CountryCode, getCountryCallingCode } from 'libphonenumber-js';

@Component({
  selector: 'it-vip-setting',
  templateUrl: './vip-setting.component.html',
  styleUrls: [ './vip-setting.component.scss' ],
  animations: [
    trigger('toolBarState', [
      state('invisible', style({
        left: '446px',
        right: '88px',
        paddingRight: 0
      })),
      state('visible', style({
        left: '430px',
        right: '80px',
        paddingRight: '8px'
      })),
      transition('invisible => visible', animate('150ms ease-in')),
      transition('visible => invisible', animate('150ms ease-out'))
    ])
  ]
})
export class VipSettingComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {

  private hostElement: HTMLElement;

  panelOpenState = false;

  contentHeight: string;

  toolBarState = 'invisible';

  person = {
    nickname: 'CBBAmazing',
    email: 'mock@sample.com',
    motto: '解走点切思效导转决亲，律新5华变克。 构设质族员子住向志，北么每头使性五，' +
    '传角J许实位园。由南志前议毛需界证决，合思十世又由叫快时，声二K音般X变坟。战定度全那队第，头且真中术，群C际维奋。式道据线众，新M。',
    gender: 'male',
    phone: '+86 137 7110 4099',
    birth: '1989-03-09'
  };

  cards: BankCard[] = [
    {
      type: '储蓄卡',
      bank: '中国工商银行',
      id: '6222****1919',
      expire: '2028-08-01',
      person: '*步兵'
    },
    {
      type: '储蓄卡',
      bank: '广东发展银行',
      id: '6222****1919',
      expire: '2022-03-04',
      person: '*步兵'
    },
    {
      type: '信用卡',
      bank: '中国农业银行',
      id: '6222****1919',
      expire: '2024-07-06',
      person: '*步兵'
    }
  ];
  bankCardMask = [
    /[1-9]/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/
  ];
  newBankCardNumber = '';
  newBankCard: BankCard;

  asYouType = new AsYouType();

  country: CountryCode;
  phoneNumber: string;

  birthDate = new FormControl(moment(this.person.birth));

  @ViewChild(MatAccordion) accordion: MatAccordion;

  isBackupEmailVisible = false;

  constructor(
    elementRef: ElementRef,
    private fetchService: FetchService,
    private tocService: TocService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.hostElement = elementRef.nativeElement;
    iconRegistry.addSvgIcon(
      'person',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_person_24px.svg'));
    iconRegistry.addSvgIcon(
      'email',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_email_24px.svg'));
    iconRegistry.addSvgIcon(
      'qq',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_qq.svg'));
    iconRegistry.addSvgIcon(
      'sina',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_sina.svg'));
    iconRegistry.addSvgIcon(
      'tencent_weibo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_tencent_weibo.svg'));
  }

  ngOnInit() {
    this.contentHeight = (window.innerHeight - 65 - 12) + 'px';
    this.asYouType.input(this.person.phone);
    this.country = this.asYouType.country;
    const nationalNumber = this.asYouType.getNationalNumber();
    this.resetCountry(this.country);
    this.phoneNumber = this.asYouType.input(nationalNumber);
    this.asYouType.reset();
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    const el = this.hostElement.querySelector('#setting-list');
    this.tocService.genToc(el, 'setting');
  }


  ngOnDestroy() {
  }

  resetCountry(country: CountryCode) {
    this.asYouType = new AsYouType(country);
  }

  getPhonePrefix(country: CountryCode) {
    return getCountryCallingCode(country);
  }

  onPhoneInput(phoneNumber: string) {
    this.asYouType.reset();
    this.phoneNumber = this.asYouType.input(phoneNumber);
  }

  // updateBankCardMask(cardNumber: string) {
  //   this.bankCardMask = this.getBankCardMask(this.getBankCardType(cardNumber));
  // }
  //
  // getBankCardType(creditCardNumber: string) {
  //   // start without knowing the credit card type
  //   let result = 'unknown';
  //
  //   if (/^5[1-5]/.test(creditCardNumber)) {
  //     // first check for MasterCard
  //     result = 'mastercard';
  //   } else if (/^4/.test(creditCardNumber)) {
  //     // then check for Visa
  //     result = 'visa';
  //   } else if (/^3[47]/.test(creditCardNumber)) {
  //     // then check for AmEx
  //     result = 'amex';
  //   } else if (/3(?:0[0-5]|[68][0-9])[0-9]{11}/.test(creditCardNumber)) {
  //     // then check for Diners
  //     result = 'diners';
  //   } else if (/6(?:011|5[0-9]{2})[0-9]{12}/.test(creditCardNumber)) {
  //     // then check for Discover
  //     result = 'discover';
  //   }
  //
  //   return result;
  // }
  //
  // getBankCardMask(cardType: string) {
  //   const masks = {
  //     'mastercard': '9999 9999 9999 9999',
  //     'visa': '9999 9999 9999 9999',
  //     'amex': '9999 999999 99999',
  //     'diners': '9999 9999 9999 99',
  //     'discover': '9999 9999 9999 9999',
  //     'unknown': '9999 9999 9999 9999'
  //   };
  //   return masks[ cardType ];
  // }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 12;
    if (window.scrollY > threshold) {
      this.toolBarState = 'visible';
    } else {
      this.toolBarState = 'invisible';
    }
  }

  @HostListener('window:resize', [ '$event.target.innerHeight' ])
  onResize(height: number) {
    this.contentHeight = (height - 65 - 12) + 'px';
  }
}

export interface BankCard {
  type: string;
  bank: string;
  id: string;
  expire: string;
  person: string;
}
