import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'it-vip-booking',
  templateUrl: './vip-booking.component.html',
  styleUrls: [ './vip-booking.component.scss' ]
})
export class VipBookingComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      myCtrl: [ '', Validators.required ]
    });

  }

}
