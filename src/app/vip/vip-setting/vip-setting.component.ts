import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatIconRegistry } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FetchService } from '../../shared/fetch.service';
import { TocService } from '../../shared/toc.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AsYouType, CountryCode, getCountryCallingCode } from 'libphonenumber-js';
import { BankCard, SecurityQuestion, SecurityQuestions, User, UserService } from '../../shared/user.service';
import { CookiesService } from '../../shared/cookies.service';
import { Moment } from 'moment';
import { MyErrorStateMatcher } from '../../shared/validation.service';

@Component({
  selector: 'it-vip-setting',
  templateUrl: './vip-setting.component.html',
  styleUrls: [ './vip-setting.component.scss' ],
  // animations: [
  //   trigger('toolBarState', [
  //     state('invisible', style({
  //       left: '446px',
  //       right: '88px',
  //       paddingRight: 0
  //     })),
  //     state('visible', style({
  //       left: '430px',
  //       right: '80px',
  //       paddingRight: '8px'
  //     })),
  //     transition('invisible => visible', animate('150ms ease-in')),
  //     transition('visible => invisible', animate('150ms ease-out'))
  //   ])
  // ]
})
export class VipSettingComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {

  private hostElement: HTMLElement;

  panelOpenState = false;

  contentHeight: string;

  // toolBarState = 'invisible';

  user: User;

  infoForm: FormGroup;
  addCardForm: FormGroup;
  addAddressForm: FormGroup;
  passwordForm: FormGroup;
  questionForm: FormGroup;
  realNameForm: FormGroup;

  formErrorStateMatcher = new MyErrorStateMatcher();

  countries = [
    {
      code: 'CN',
      name: '中国',
      prefix: '+86',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg'
    },
    {
      code: 'US',
      name: 'USA',
      prefix: '+1',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
    }
  ];

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
      personName: '*步兵'
    },
    {
      type: '储蓄卡',
      bank: '广东发展银行',
      id: '6222****1919',
      expire: '2022-03-04',
      personName: '*步兵'
    },
    {
      type: '信用卡',
      bank: '中国农业银行',
      id: '6222****1919',
      expire: '2024-07-06',
      personName: '*步兵'
    }
  ];
  phoneMask = [
    /[1-9]/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/, /\d/,
    ' ', '-', ' ',
    /\d/, /\d/, /\d/, /\d/,
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

  securityQuestionOptions = [
    '你最喜欢的格言是什么？',
    '你家乡的名称是什么？',
    '你读的小学叫什么？',
    '你的父亲叫什么名字？',
    '你的母亲叫什么名字？',
    '你最喜欢的偶像是谁？',
    '你最喜欢的歌曲是什么？',
  ];

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    elementRef: ElementRef,
    private userService: UserService,
    private cookiesService: CookiesService,
    private fetchService: FetchService,
    private tocService: TocService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.hostElement = elementRef.nativeElement;
    this.registerIcons();
  }

  ngOnInit() {
    this.contentHeight = (window.innerHeight - 65 - 12) + 'px';
    this.asYouType.input(this.person.phone);
    this.country = this.asYouType.country;
    const nationalNumber = this.asYouType.getNationalNumber();
    this.resetCountry(this.country);
    this.phoneNumber = this.asYouType.input(nationalNumber);
    this.asYouType.reset();
    this.createForms();
  }

  ngAfterViewInit() {
    this.fetchService.setFetching();
    this.userService.getUserDetail()
      .subscribe((user) => {
        this.fetchService.setFetched();
        this.user = user;

        this.resetInfoForm();
        this.resetQuestionForm();
      });
  }

  ngAfterContentInit() {
    const el = this.hostElement.querySelector('#setting-list');
    this.tocService.genToc(el, 'setting');
  }


  ngOnDestroy() {
  }

  registerIcons() {
    this.iconRegistry.addSvgIcon(
      'person',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_person_24px.svg'));
    this.iconRegistry.addSvgIcon(
      'email',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_email_24px.svg'));
    this.iconRegistry.addSvgIcon(
      'qq',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_qq.svg'));
    this.iconRegistry.addSvgIcon(
      'sina',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_sina.svg'));
    this.iconRegistry.addSvgIcon(
      'tencent_weibo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_tencent_weibo.svg'));
  }

  createForms() {
    this.infoForm = this.fb.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      nickname: [ '', Validators.required ],
      prefix: 'CN',
      phone: '',
      birth: '',
      motto: ''
    });
    this.infoForm.disable();

    this.addCardForm = this.fb.group({});
    // this.addCardForm.disable();

    this.addAddressForm = this.fb.group({});
    // this.addAddressForm.disable();

    this.passwordForm = this.fb.group({
      oldPassword: [ '', Validators.required ],
      newPassword: [ '', Validators.required ],
      repPassword: [ '', [ Validators.required ] ],
    });
    // this.passwordForm.disable();

    const questionFGs: FormGroup[] = [];
    questionFGs.push(this.fb.group({ question: '', answer: '' }));
    questionFGs.push(this.fb.group({ question: '', answer: '' }));
    questionFGs.push(this.fb.group({ question: '', answer: '' }));
    this.questionForm = this.fb.group({
      questions: this.fb.array(questionFGs)
    });
    this.questionForm.disable();

    this.realNameForm = this.fb.group({
      name: [ '', Validators.required ],
      id: [ '', [ Validators.required, Validators.pattern(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/) ] ]
    });
  }


  /***************************************************
   *                                                 *
   *  Personal information form                      *
   *                                                 *
   ***************************************************/
  resetInfoForm() {
    this.infoForm.disable();

    const phoneNumber = this.user.info.phone;
    this.asYouType.input(phoneNumber);
    const country = this.asYouType.country;
    const phone = this.asYouType.getNationalNumber();
    this.resetCountry(country);

    this.infoForm.reset({
      email: this.user.info.email,
      nickname: this.user.info.nickname,
      prefix: country,
      phone,
      birth: moment(this.user.info.birth),
      motto: this.user.info.motto
    });

    this.infoForm.enable();
  }

  submitInfoForm() {
    this.infoForm.disable();

    const formModel = this.infoForm.value;

    const saveInfo: User['info'] = {
      email: this.user.info.email,
      password: this.user.info.password,
      nickname: formModel.nickname as string,
      phone: '+' + this.getPhonePrefix(formModel.prefix as CountryCode) + (formModel.phone as string),
      birth: (formModel.birth as Moment).toISOString(),
      motto: formModel.motto as string
    };

    this.fetchService.setFetching();
    this.userService.updateUserInfo(saveInfo)
      .subscribe(newUserInfo => {
        this.fetchService.setFetched();
        this.user.info = newUserInfo;
        this.resetInfoForm();
      });
  }


  /***************************************************
   *                                                 *
   *  Change Password form                           *
   *                                                 *
   ***************************************************/
  resetPasswordForm() {
    this.passwordForm.disable();

    this.passwordForm.reset({
      oldPassword: '',
      newPassword: '',
      repPassword: ''
    });

    this.passwordForm.enable();
  }

  submitPasswordForm() {
    this.passwordForm.disable();

    if (this.checkPasswordForm()) {
      const formModel = this.passwordForm.value;

      const savePassword = formModel.newPassword;

      this.fetchService.setFetching();
      this.userService.updateUserPassowrd(savePassword)
        .subscribe(newPassword => {
          this.fetchService.setFetched();
          this.user.info.password = newPassword;
          this.resetPasswordForm();
        });
    }
  }

  checkPasswordForm(): boolean {
    const formModel = this.passwordForm.value;

    if (this.user.info.password !== formModel.oldPassword) { // Wrong password.
      this.passwordForm.get('oldPassword').setErrors({ 'wrongPassword': true });
      this.passwordForm.enable();
      return false;
    } else if (formModel.newPassword !== formModel.repPassword) { // Repeated password not matching new password.
      this.passwordForm.get('repPassword').setErrors({ 'notMatch': true });
      this.passwordForm.enable();
      return false;
    } else {  // Everything is checked true.
      return true;
    }
  }


  /***************************************************
   *                                                 *
   *  Security Question form                         *
   *                                                 *
   ***************************************************/
  get questions(): FormArray {
    return this.questionForm.get('questions') as FormArray;
  }

  resetQuestionForm() {
    this.questionForm.disable();

    const questionFGs = this.user.security.securityQuestions.map(question => this.fb.group(question));

    this.questionForm.setControl(
      'questions', this.fb.array(questionFGs)
    );

    this.questionForm.enable();
  }

  submitQuestionForm() {
    this.questionForm.disable();

    const formModel = this.questionForm.value;

    const saveQuestions: SecurityQuestions = formModel.questions.map((question: SecurityQuestion) => Object.assign({}, question));

    this.fetchService.setFetching();
    this.userService.updateUserQuestions(saveQuestions)
      .subscribe(newUserQuestions => {
        this.fetchService.setFetched();
        this.user.security.securityQuestions = newUserQuestions;
        this.resetQuestionForm();
      });
  }


  /***************************************************
   *                                                 *
   *  Real-name Auth form                            *
   *                                                 *
   ***************************************************/
  resetRealNameForm() {
    this.realNameForm.disable();

    this.realNameForm.reset({
      name: '',
      id: ''
    });

    this.realNameForm.enable();
  }

  submitRealNameForm() {
    this.realNameForm.disable();

    const formModel = this.realNameForm.value;

    const saveRealName = {
      name: formModel.name,
      id: formModel.id
    };

    this.fetchService.setFetching();
    this.userService.updateUserRealName(saveRealName)
      .subscribe(newRealName => {
        this.fetchService.setFetched();
        this.user.security.realName = newRealName;
        this.resetRealNameForm();
      });
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

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const threshold = 12;
  //   if (window.scrollY > threshold) {
  //     this.toolBarState = 'visible';
  //   } else {
  //     this.toolBarState = 'invisible';
  //   }
  // }

  @HostListener('window:resize', [ '$event.target.innerHeight' ])
  onResize(height: number) {
    this.contentHeight = (height - 65 - 12) + 'px';
  }
}
