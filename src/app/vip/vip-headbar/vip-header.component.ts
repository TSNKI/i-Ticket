import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { VipLoginComponent } from '../vip-login/vip-login.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-vip-header',
  templateUrl: './vip-header.component.html',
  styleUrls: [ './vip-header.component.scss' ]
})
export class VipHeadbarComponent implements OnInit {

  user: { username: string, nickname: string };

  categories: { id: number, name: string, displayName: string }[];

  constructor(
    private cookieService: CookiesService,
    private eventService: EventService,
    private userService: UserService,
    private dialog: MatDialog
  ) {
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

    dialogConfig.disableClose = true;
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
}
