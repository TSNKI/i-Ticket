import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { VipLoginComponent } from '../vip-login/vip-login.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MatIconRegistry } from '@angular/material';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-vip-header',
  templateUrl: './vip-header.component.html',
  styleUrls: [ './vip-header.component.scss' ],
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
export class VipHeadbarComponent implements OnInit {

  user: { username: string, nickname: string };

  categories: { id: number, name: string, displayName: string }[];

  backTopState = 'invisible';

  constructor(
    private cookieService: CookiesService,
    private eventService: EventService,
    private userService: UserService,
    private dialog: MatDialog,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_search_24px.svg'));
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_settings_24px.svg'));
    iconRegistry.addSvgIcon(
      'orders',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_list_alt_24px.svg'));
    iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ic_exit_to_app_24px.svg'));
  }

  ngOnInit() {
    const username = this.cookieService.getCookie('username');
    if (username) {
      this.user = this.userService.getUserInfo(username);
    }
    this.categories = this.eventService.getCategories;
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(VipLoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      () => {
        const username = this.cookieService.getCookie('username');
        if (username) {
          this.user = this.userService.getUserInfo(username);
        }
      }
    )
    ;
  }

  logout(): void {
    this.cookieService.setCookie('username', '', -1);
    this.user = null;
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
