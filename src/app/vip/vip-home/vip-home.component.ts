import { Component, HostListener, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vip-home',
  templateUrl: './vip-home.component.html',
  styleUrls: [ './vip-home.component.scss' ],
  animations: [
    trigger('navBarState', [
      state('inactive', style({
        display: 'none',
        opacity: 0
      })),
      state('active', style({
        display: 'block',
        opacity: 1
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
  ]
})
export class VipHomeComponent implements OnInit {

  hotSpotData = [
    {
      id: 0,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 1,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 2,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 3,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 4,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 5,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 6,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 7,
      title: '游侠索罗',
      link: ''
    },
    {
      id: 8,
      title: '游侠索罗',
      link: ''
    }
  ];

  navBarState = 'inactive';

  constructor() {
  }

  ngOnInit() {
  }

  slideTo(index: number, carousel: NzCarouselComponent): void {
    carousel.goTo(index);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 65 + 480 - 53;
    if (window.scrollY >= threshold) {
      this.navBarState = 'active';
    } else {
      this.navBarState = 'inactive';
    }
  }
}
