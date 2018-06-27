import { Component, HostListener, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'it-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: [ './back-top.component.scss' ],
  animations: [
    trigger('backTopState', [
      state('invisible', style({
        display: 'none',
        opacity: 0,
      })),
      state('visible', style({
        display: 'block',
        opacity: 1,
      })),
      transition('invisible => visible', animate('100ms ease-in')),
      transition('visible => invisible', animate('200ms ease-out'))
    ])
  ]
})
export class BackTopComponent implements OnInit {

  backTopState = 'invisible';

  @Input() hrefBase: string;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = window.innerHeight;
    if (window.scrollY >= threshold) {
      this.backTopState = 'visible';
    } else {
      this.backTopState = 'invisible';
    }
  }

}
