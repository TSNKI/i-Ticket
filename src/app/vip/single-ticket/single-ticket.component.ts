import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { CookiesService } from '../../shared/cookies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../shared/user.service';
import { MatChipInputEvent, MatIconRegistry, MatSnackBar } from '@angular/material';
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
  allticket: number;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  tips: any[];
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
    private snackBar: MatSnackBar,
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
    this.tips = [
      { name: '演出时间', value: '2018.09.08 19:30', name2: '演出场馆', value2: '华润深圳湾体育中心＂春茧＂体育场' },
      { name: '演出时长', value: '暂无相关信息，请以现场为准', name2: '入场时间', value2: '演出前约120分钟' },
      {
        name: '预售时间', value: '客户端预售时间:2018-06-25 09:58:00; 网页端预售时间:2018-06-25 09:58:00'
        , name2: '限购', value2: '每个账号最多购买6张'
      },
      {
        name: '儿童入场提示', value: '1.2米以上凭成人票入场，1.2米以下谢绝入场'
        , name2: '禁止携带物品', value2: '由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合'
      },
      {
        name: '付款时效提醒', value: '购票下单成功后需在15分钟内完成支付，未支付成功的订单，将在下单15分钟后系统自动取消，所选价位将自动释放后重新点亮，大家可及时刷新购票页面进行购买'
        , name2: '缺货登记提醒', value2: '所需票价若为灰色，说明已经售完。您可以在当前页面进行缺货登记，后期如果有票会以短信形式及时通知'
      },
      {
        name: '发票说明', value: '演出结束后将不支持开具发票申请，由此给您造成的不便我们深表歉意，感谢您的理解与支持！'
        , name2: '实名制', value2: '购买时您需要输入购票人身份证信息，每笔订单对应一个证件号'
      },
      {
        name: '座位类型', value: '请按门票对应位置，有序对号入座'
        , name2: '物品寄存', value2: '无寄存处，请自行保管携带物品'
      },
      {
        name: '纸质票入场', value: '本演出（展览、赛事）提供纸质门票，演出（观展、比赛）当天请携带收到的纸质门票，验票后入场（仅订单或订单截图无效）'
        , name2: '不支持退换', value2: '票品不支持退换。如无法正常观看，还请自行处理，给您带来不便敬请谅解'
      },
    ];
    this.id = 5;
    this.datechoosed = 0;
    this.allticket = 0;
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
      if (this.allticket >= 6) {
        const snackBarRef = this.snackBar.open('您的订票数已达6张上限', '确认', { duration: 1000 });
        snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
        return;
      }
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
      this.allticket += 1;
    }
  }

  add(item) {
    if (this.allticket >= 6) {
      const snackBarRef = this.snackBar.open('您的订票数已达6张上限', '确认', { duration: 1000 });
      snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
      return;
    }
    this.itemlist[ item ].number += 1;
    this.allticket += 1;
  }

  sub(item) {
    this.itemlist[ item ].number -= 1;
    this.allticket -= 1;
    if (this.itemlist[ item ].number <= 0) {
      this.itemlist.splice(item, 1);
    }
  }

  delete(item) {
    this.allticket -= this.itemlist[ item ].number;
    this.itemlist.splice(item, 1);
  }

  like() {
    const snackBarRef = this.snackBar.open('已加入收藏', '确认', { duration: 1000 });
    snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
  }

  share() {
    const snackBarRef = this.snackBar.open('已分享', '确认', { duration: 1000 });
    snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
  }

}
