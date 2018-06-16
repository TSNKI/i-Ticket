import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CdkAccordion } from '@angular/cdk/accordion';

@Component({
  selector: 'app-vip-profile',
  templateUrl: './vip-profile.component.html',
  styleUrls: [ './vip-profile.component.scss' ]
})
export class VipProfileComponent implements OnInit {

  panelOpenState = false;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }
}
