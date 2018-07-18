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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry } from '@angular/material';
import { CookiesService } from "../../shared/cookies.service";
import { toNumber } from "ng-zorro-antd/src/core/util/convert";
import { DomSanitizer } from "@angular/platform-browser";

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
    private iconRegistry: MatIconRegistry,
    private sanitiser: DomSanitizer
  ) {

    iconRegistry.addSvgIcon('ordering_success',
      sanitiser.bypassSecurityTrustResourceUrl('assets/icons/ic_ordering_success.svg'));

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

  openDialog(): void {

  }
}
