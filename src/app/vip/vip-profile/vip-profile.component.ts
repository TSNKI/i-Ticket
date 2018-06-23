import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CdkAccordion } from '@angular/cdk/accordion';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vip-profile',
  templateUrl: './vip-profile.component.html',
  styleUrls: [ './vip-profile.component.scss' ],
  animations: [
    trigger('toolBarState', [
      state('inactive', style({
        left: '446px',
        right: '88px',
        paddingRight: 0
      })),
      state('active', style({
        left: '430px',
        right: '80px',
        paddingRight: '8px'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class VipProfileComponent implements OnInit {

  panelOpenState = false;

  toolBarState = 'inactive';

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 12;
    if (window.scrollY > threshold) {
      this.toolBarState = 'active';
    } else {
      this.toolBarState = 'inactive';
    }
  }

}
