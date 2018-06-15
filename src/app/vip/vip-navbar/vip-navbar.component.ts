import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../services/cookies.service';
import { VipLoginComponent } from '../vip-login/vip-login.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-vip-navbar',
  templateUrl: './vip-navbar.component.html',
  styleUrls: [ './vip-navbar.component.css' ]
})
export class VipNavbarComponent implements OnInit {

  username: string;

  constructor(
    private cookieService: CookiesService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.username = this.cookieService.getCookie('username');
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(VipLoginComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      () => this.username = this.cookieService.getCookie('username')
    )
    ;
  }

  logout(): void {
    this.cookieService.setCookie('username', '', -1);
    this.username = null;
  }
}
