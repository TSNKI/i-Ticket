import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { EventService } from '../../services/event.service';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-vip-home',
  templateUrl: './vip-home.component.html',
  styleUrls: [ './vip-home.component.scss' ],
  animations: [
    trigger('floatBarState', [
      state('wrapped', style({
        marginLeft: '0',
        marginRight: '0',
      })),
      state('expanded', style({
        marginLeft: '-16px',
        marginRight: '-16px',
      })),
      transition('wrapped => expanded', animate('150ms ease-in')),
      transition('expanded => wrapped', animate('150ms ease-out'))
    ])
  ]
})
export class VipHomeComponent implements OnInit {

  hotSpotData = [
    {
      id: 0,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 1,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 2,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 3,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 4,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 5,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 6,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 7,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    },
    {
      id: 8,
      title: '梅赛德斯-奔驰特别呈现 Mike Shinoda 麦克·信田上海演唱会',
      link: '',
      img: 'assets/images/1806151351072999_m1.jpg'
    }
  ];

  floatBarState = 'wrapped';

  categoryData: any[];

  selected = [ true, false, false, false, false, false, false, false, false ];

  // position: number[];

  constructor(
    @Inject(DOCUMENT) private doc: any,
    private eventService: EventService,
  ) {
  }

  ngOnInit() {
    this.categoryData = [];
    this.eventService.getCategories.forEach(category => {
      this.categoryData.push(
        {
          id: category.id,
          name: category.name,
          displayName: category.displayName,
          items: []
        }
      );
    });
  }

  setSelected(index: number) {
    this.selected = [ false, false, false, false, false, false, false, false, false ];
    this.selected[ index ] = true;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 65 + 480 - 53;
    if (window.scrollY >= threshold) {
      this.floatBarState = 'expanded';
    } else {
      this.floatBarState = 'wrapped';
    }
  }
}
