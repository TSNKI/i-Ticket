import { AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { EventService } from '../../services/event.service';

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
export class VipHomeComponent implements OnInit, AfterViewInit {

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

  floatBarState = 'wrapped';

  categoryData: any[];

  position: number[];

  navActives = [ false, false, false, false, false, false ];

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

  ngAfterViewInit() {
    this.position = [];
    this.categoryData.forEach(category => {
      const dom = this.doc.getElementById(category.name);
      this.position.push(dom.getBoundingClientRect().top - 300);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = 65 + 480 - 53;
    if (window.scrollY >= threshold) {
      this.floatBarState = 'expanded';
    } else {
      this.floatBarState = 'wrapped';
    }

    if (window.scrollY <= this.position[ 1 ]) {
      console.log(this.navActives[ 0 ]);
      this.navActives[ 0 ] = true;
    } else {
      this.navActives[ 0 ] = false;
    }
    for (let i = 1; i < this.position.length - 1; i++) {
      if (this.position[ i ] < window.scrollY && window.scrollY <= this.position[ i + 1 ]) {
        this.navActives[ i ] = true;
      } else {
        this.navActives[ i ] = false;
      }
    }
    if (this.position[ this.position.length - 1 ] < window.scrollY) {
      this.navActives[ this.position.length - 1 ] = true;
    } else {
      this.navActives[ this.position.length - 1 ] = false;
    }
  }

  // @HostListener('window:load', [])
  // onWindowLoad() {
  //   this.scrollToAnchor();
  // }
  //
  // @HostListener('window:hashchange', [])
  // onHashChange() {
  //   this.scrollToAnchor();
  // }
  //
  //
  // private scrollToAnchor() {
  //   // 获取伪锚点的id
  //   const anchor = this.getAnchor();
  //
  //   // 如果不存在伪锚点,则直接结束
  //   if (anchor.length < 1) {
  //     return;
  //   }
  //
  //   const anchorDom = this.getDom(anchor);
  //   const anchorScrollTop = anchorDom.offsetTop;
  //
  //   alert(document.body.scrollTop + ' ' + anchorScrollTop);
  //   this.animationToAnchor(document.body.scrollTop, anchorScrollTop);
  // }
  //
  // /*
  //     @function 滚动到指定位置方法
  //     @param startNum {int} -- 开始位置
  //     @param stopNum {int} -- 结束位置
  //   */
  // private animationToAnchor(startNum, stopNum) {
  //   let nowNum = startNum + 10; // 步进为10
  //
  //   if (nowNum > stopNum) {
  //     nowNum = stopNum;
  //   }
  //
  //   // 缓动方法
  //   window.requestAnimationFrame(() => {
  //     document.body.scrollTop = nowNum; // 当前示例页面，滚动条在body，所以滚动body
  //
  //     // 滚动到预定位置则结束
  //     if (nowNum === stopNum) {
  //       return;
  //     }
  //
  //     this.animationToAnchor(nowNum, stopNum); // 只要还符合缓动条件，则递归调用
  //   });
  // }
  //
  // private getAnchor() {
  //   return window.location.hash.substring(1);
  // }
  //
  // private getDom(id) {
  //   return document.getElementById(id);
  // }

}
