import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-orders',
  templateUrl: './vip-orders.component.html',
  styleUrls: [ './vip-orders.component.css' ]
})
export class VipOrdersComponent implements OnInit {

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
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
