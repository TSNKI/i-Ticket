import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-vip-orders',
  templateUrl: './vip-orders.component.html',
  styleUrls: [ './vip-orders.component.scss' ]
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

  toolBarStyle = {
    marginLeft: '12px',
    marginRight: '12px',
  };

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const delta = window.scrollY - 164;
    if (delta <= 0) {
      this.toolBarStyle = {
        marginLeft: '12px',
        marginRight: '12px',
      };
    } else if (delta <= 16) {
      this.toolBarStyle.marginLeft = 12 - Math.round(delta * 12 / 16) + 'px';
      this.toolBarStyle.marginRight = 12 - Math.round(delta * 12 / 16) + 'px';
    } else {
      this.toolBarStyle = {
        marginLeft: '0',
        marginRight: '0',
      };
    }
  }
}
