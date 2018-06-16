import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CdkAccordion } from '@angular/cdk/accordion';

@Component({
  selector: 'app-vip-profile',
  templateUrl: './vip-profile.component.html',
  styleUrls: [ './vip-profile.component.scss' ]
})
export class VipProfileComponent implements OnInit {

  panelOpenState = false;

  toolBarStyle = {
    left: '466px',
    right: '88px',
    paddingRight: '0'
  };

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const delta = window.scrollY;
    if (delta <= 0) {
      this.toolBarStyle = {
        left: '466px',
        right: '88px',
        paddingRight: '0'
      };
    } else if (delta <= 16) {
      this.toolBarStyle.left = 466 - Math.round(delta * 12 / 16) + 'px';
      this.toolBarStyle.right = 88 - Math.round(delta * 5 / 16) + 'px';
      this.toolBarStyle.paddingRight = Math.round(delta * 5 / 16) + 'px';
    } else {
      this.toolBarStyle = {
        left: '454px',
        right: '83px',
        paddingRight: '5px'
      };
    }
  }

}
