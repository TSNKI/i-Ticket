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
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
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
