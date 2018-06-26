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
import { ValidationService } from './services/validation.service';
import { UserService } from './services/user.service';
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
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LOCALE_ID, useValue: 'zh-Hans' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
