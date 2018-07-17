import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  BankCard,
  CreditCard,
  DebitCard,
  ShippingAddress,
  User,
  UserService
} from "../../shared/user.service";
import { FetchService } from "../../shared/fetch.service";
import { CookiesService } from "../../shared/cookies.service";
import { toNumber } from "ng-zorro-antd/src/core/util/convert";

@Component({
  selector: 'it-vip-booking',
  templateUrl: './vip-booking.component.html',
  styleUrls: [ './vip-booking.component.scss' ]
})
export class VipBookingComponent implements OnInit {

  formGroup: FormGroup;
  bankCard: BankCard;
  user: User;
  address: ShippingAddress;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private fetchService: FetchService,
  ) {

  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      myCtrl: [ '', Validators.required ]
    });


    this.getUserDetail();

  }

  getUserDetail() {
    this.fetchService.setFetching();
    this.userService.getUserDetail()
      .subscribe(nextUser => {
        this.fetchService.setFetched();
        this.user = nextUser;
      })
  }

  radioCheck(param): boolean {
    if (param == 0)
      return true;
    return false;
  }
}
