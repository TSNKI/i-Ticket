import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './user/login/login.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {MaterialModule} from './material.module';
import {ValidationService} from './services/validation.service';
import {UserService} from './services/user.service';
import {MgrNavbarComponent} from './mgr/mgr-navbar/mgr-navbar.component';
import {VipNavbarComponent} from './vip/vip-navbar/vip-navbar.component';
import {VenNavbarComponent} from './ven/ven-navbar/ven-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHomeComponent,
    MgrNavbarComponent,
    VipNavbarComponent,
    VenNavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    ValidationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
