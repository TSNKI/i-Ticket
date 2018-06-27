import {
  AfterContentInit,
  AfterViewInit,
  Component, ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatAccordion } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FetchService } from '../../shared/fetch.service';
import { TocService } from '../../shared/toc.service';

@Component({
  selector: 'it-vip-setting',
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
export class VipSettingComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {

  private hostElement: HTMLElement;

  panelOpenState = false;

  contentHeight: string;

  toolBarState = 'invisible';

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    elementRef: ElementRef,
    private fetchService: FetchService,
    private tocService: TocService,
  ) {
    this.hostElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.contentHeight = (window.innerHeight - 65 - 12) + 'px';
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    const el = this.hostElement.querySelector('#setting-list');
    this.tocService.genToc(el, 'setting');
  }


  ngOnDestroy() {
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

  @HostListener('window:resize', [ '$event.target.innerHeight' ])
  onResize(height: number) {
    this.contentHeight = (height - 65 - 12) + 'px';
  }
}
