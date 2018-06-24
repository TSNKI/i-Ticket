import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vip-orders',
  templateUrl: './vip-orders.component.html',
  styleUrls: [ './vip-orders.component.scss' ],
  animations: [
    trigger('toolBarState', [
      state('invisible', style({
        marginLeft: '12px',
        marginRight: '12px'
      })),
      state('visible', style({
        marginLeft: 0,
        marginRight: 0
      })),
      transition('invisible => visible', animate('100ms ease-in')),
      transition('visible => invisible', animate('100ms ease-out'))
    ])
  ]
})
export class VipOrdersComponent implements OnInit {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  selectorStyle = {
    paddingBottom: 0
  };

  tickets = [
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    },
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    },
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    },
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    },
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    },
    {
      title: '复仇者联盟3',
      price: '78.0',
      date: '2018-05-11'
    },
    {
      title: '游侠索罗',
      price: '84.0',
      date: '2018-05-28'
    },
    {
      title: '死侍2',
      price: '28.0',
      date: '2018-08-24'
    }
  ];

  toolBarState = 'invisible';

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 164;
    if (window.scrollY >= threshold) {
      this.toolBarState = 'visible';
    } else {
      this.toolBarState = 'invisible';
    }
  }
}
