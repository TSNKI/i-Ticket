import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {AppHomeComponent} from './app-home/app-home.component';
import {MaterialModule} from './material.module';
import {ValidationService} from './services/validation.service';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppHomeComponent,
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
