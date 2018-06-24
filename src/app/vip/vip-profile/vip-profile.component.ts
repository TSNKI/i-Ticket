import { AfterViewInit, Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { CdkAccordion } from '@angular/cdk/accordion';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-vip-profile',
  templateUrl: './vip-profile.component.html',
  styleUrls: [ './vip-profile.component.scss' ],
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
export class VipProfileComponent implements OnInit, AfterViewInit {

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

  // demo() {
  //   window.onload = function () {
  //     nav();
  //   };
  //
  //   // nav导航
  //   function nav() {
  //     const arr = [
  //       pos($('div1')).top,
  //       pos($('div2')).top,
  //       pos($('div3')).top,
  //       pos($('div4')).top,
  //       pos($('div5')).top,
  //       pos($('div6')).top,
  //       pos($('div7')).top,
  //       pos($('div8')).top
  //     ];
  //     const oUl = getByClass('nav')[ 0 ];
  //     const aLi = oUl.getElementsByTagName('li');
  //     console.log(aLi.length);
  //     (function () {
  //       aLi[ 0 ].style.background = '#fd8200';
  //       aLi[ 0 ].s = true;
  //     })();
  //     for (let i = 0; i < aLi.length; i++) {
  //       aLi[ i ].onmouseover = function () {
  //         if (!this.s) {
  //           this.style.background = '#fd8200';
  //         }
  //       };
  //       aLi[ i ].onmouseout = function () {
  //         if (!this.s) {
  //           this.style.background = '';
  //         }
  //       };
  //       aLi[ i ].index = i;
  //       aLi[ i ].onclick = function () {
  //         const num = this.index;
  //         for (let j = 0; j < aLi.length; j++) {
  //           aLi[ j ].style.background = '';
  //           aLi[ j ].s = '';
  //         }
  //         this.style.background = '#fd8200';
  //         this.s = true;
  //         window.onscroll = function () {
  //
  //         };
  //       };
  //     }
  //     document.onmousewheel = fnMouse; // 滚轮事件
  //     if (document.addEventListener) {
  //       document.addEventListener('DOMMouseScroll', fnMouse, false);
  //     }
  //
  //     function fnMouse() {
  //       for (let i = 0; i < arr.length; i++) {
  //         aLi[ i ].style.background = '';
  //         console.log('y ' + scrollY());
  //         console.log('arr ' + arr[ i ]);
  //         if (scrollY() > arr[ i ] && scrollY() < arr[ i + 1 ]) {
  //           aLi[ i ].style.background = '#fd8200';
  //         }
  //
  //         if (scrollY() > arr[ arr.length - 1 ]) {
  //           aLi[ arr.length - 1 ].style.background = '#fd8200';
  //         }
  //
  //       }
  //     }
  //   }
  //
  //   // 滚动条高
  //   function scrollY() {
  //     return document.documentElement.scrollTop || document.body.scrollTop;
  //   }
  //
  //   // 获取className
  //   function getByClass(sClass, parent?) {
  //     const aEles = (parent || document).getElementsByTagName('*');
  //     const re = new RegExp('\\b' + sClass + '\\b');
  //     const arr = [];
  //     for (let i = 0; i < aEles.length; i++) {
  //       if (re.test(aEles[ i ].className)) {
  //         arr.push(aEles[ i ]);
  //       }
  //     }
  //     return arr;
  //   }
  //
  //   // 获取ID
  //   function $(id) {
  //     return document.getElementById(id);
  //   }
  //
  //   // obj到页面顶部实际距离
  //   function pos(obj) {
  //     const result = { left: 0, top: 0 };
  //     while (obj) {
  //       result.top += obj.offsetTop;
  //       result.left += obj.offsetLeft;
  //       obj = obj.offsetParent;
  //     }
  //     return result;
  //   }
  // }
}
