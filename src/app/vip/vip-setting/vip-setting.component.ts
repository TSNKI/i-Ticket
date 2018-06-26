import { AfterViewInit, Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CdkAccordion } from '@angular/cdk/accordion';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vip-setting',
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
export class VipSettingComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  toolBarState = 'invisible';

  anchors: any;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

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
}
