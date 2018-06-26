import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { MaterialModule } from './material.module';
import { ValidationService } from './shared/validation.service';
import { UserService } from './shared/user.service';
import { MgrNavbarComponent } from './mgr/mgr-navbar/mgr-navbar.component';
import { VipHeadbarComponent } from './vip/vip-header/vip-header.component';
import { VenNavbarComponent } from './ven/ven-navbar/ven-navbar.component';
import { MgrHomeComponent } from './mgr/mgr-home/mgr-home.component';
import { VenHomeComponent } from './ven/ven-home/ven-home.component';
import { VipHomeComponent } from './vip/vip-home/vip-home.component';
import { VipSettingComponent } from './vip/vip-setting/vip-setting.component';
import { VipLoginComponent } from './vip/vip-login/vip-login.component';
import { VipOrdersComponent } from './vip/vip-orders/vip-orders.component';
import { VenProfileComponent } from './ven/ven-profile/ven-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { VipFooterComponent } from './vip/vip-footer/vip-footer.component';
import { VipSearchComponent } from './vip/vip-search/vip-search.component';
import { VipMovieComponent } from './vip/categories/vip-movie/vip-movie.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { TocComponent } from './toc/toc.component';
import { TocService } from './shared/toc.service';
import { ScrollService } from './shared/scroll.service';
import { ScrollSpyService } from './shared/scroll-spy.service';
import { LocationService } from './shared/location.service';
import { windowProvider, WindowToken } from './shared/window';
import { BackTopComponent } from './back-top/back-top.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHomeComponent,
    MgrNavbarComponent,
    VipHeadbarComponent,
    VenNavbarComponent,
    MgrHomeComponent,
    VenHomeComponent,
    VipHomeComponent,
    SignupComponent,
    VipSettingComponent,
    VipLoginComponent,
    VipOrdersComponent,
    VenProfileComponent,
    VipFooterComponent,
    VipSearchComponent,
    VipMovieComponent,
    MaxLengthPipe,
    TocComponent,
    BackTopComponent,
  ],
  entryComponents: [
    VipLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  providers: [
    ValidationService,
    UserService,
    TocService,
    ScrollService,
    ScrollSpyService,
    LocationService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: WindowToken, useFactory: windowProvider },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
