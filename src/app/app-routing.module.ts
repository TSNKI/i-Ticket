import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { MgrHomeComponent } from './mgr/mgr-home/mgr-home.component';
import { VenHomeComponent } from './ven/ven-home/ven-home.component';
import { VipHomeComponent } from './vip/vip-home/vip-home.component';
import { VipSettingComponent } from './vip/vip-setting/vip-setting.component';
import { VipOrdersComponent } from './vip/vip-orders/vip-orders.component';
import { VipSearchComponent } from './vip/vip-search/vip-search.component';
import { SingleTicketComponent } from './vip/single-ticket/single-ticket.component';
import { VipConcertComponent } from './vip/categories/vip-concert/vip-concert.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  { path: '', component: VipHomeComponent },
  { path: 'search', component: VipSearchComponent },
  { path: 'ticket', component: SingleTicketComponent },
  { path: 'concert', component: VipConcertComponent },
  { path: 'setting', canActivate: [ AuthGuard ], component: VipSettingComponent },
  { path: 'orders', canActivate: [ AuthGuard ], component: VipOrdersComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'mgr', component: MgrHomeComponent },
  { path: 'ven', component: VenHomeComponent },
  // { path: 'vip', component: VipHomeComponent },
  { path: 'vip', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
