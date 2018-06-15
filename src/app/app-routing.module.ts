import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { MgrHomeComponent } from './mgr/mgr-home/mgr-home.component';
import { VenHomeComponent } from './ven/ven-home/ven-home.component';
import { VipHomeComponent } from './vip/vip-home/vip-home.component';
import { VipProfileComponent } from './vip/vip-profile/vip-profile.component';

const routes: Routes = [
  { path: '', component: VipHomeComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'mgr', component: MgrHomeComponent },
  { path: 'ven', component: VenHomeComponent },
  // { path: 'vip', component: VipHomeComponent },
  { path: 'vip/profile', component: VipProfileComponent },
  { path: 'vip', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
