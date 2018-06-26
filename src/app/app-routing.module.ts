import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { MgrHomeComponent } from './mgr/mgr-home/mgr-home.component';
import { VenHomeComponent } from './ven/ven-home/ven-home.component';
import { VipHomeComponent } from './vip/vip-home/vip-home.component';
import { VipSettingComponent } from './vip/vip-setting/vip-setting.component';
import { VipOrdersComponent } from './vip/vip-orders/vip-orders.component';
import { VipMovieComponent } from './vip/categories/vip-movie/vip-movie.component';
import { VipSearchComponent } from './vip/vip-search/vip-search.component';

const routes: Routes = [
  { path: '', component: VipHomeComponent },
  { path: 'search', component: VipSearchComponent },
  { path: 'movie', component: VipMovieComponent },
  { path: 'setting', component: VipSettingComponent },
  { path: 'orders', component: VipOrdersComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'mgr', component: MgrHomeComponent },
  { path: 'ven', component: VenHomeComponent },
  // { path: 'vip', component: VipHomeComponent },
  { path: 'vip', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
