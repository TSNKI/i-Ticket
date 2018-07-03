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
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { TocComponent } from './toc/toc.component';
import { TocService } from './shared/toc.service';
import { ScrollService } from './shared/scroll.service';
import { ScrollSpyService } from './shared/scroll-spy.service';
import { LocationService } from './shared/location.service';
import { windowProvider, WindowToken } from './shared/window';
import { BackTopComponent } from './back-top/back-top.component';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { VipConcertComponent } from './vip/categories/vip-concert/vip-concert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AuthGuard } from './shared/auth-guard.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MM YYYY',
  },
};

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
    MaxLengthPipe,
    TocComponent,
    BackTopComponent,
    VipConcertComponent,
    PageNotFoundComponent,
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
    TextMaskModule,
  ],
  providers: [
    ValidationService,
    AuthGuard,
    UserService,
    TocService,
    ScrollService,
    ScrollSpyService,
    LocationService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: WindowToken, useFactory: windowProvider },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
