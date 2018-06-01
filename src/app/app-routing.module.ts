import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {AppHomeComponent} from './app-home/app-home.component';

const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'user/login', component: LoginComponent},
  // { path: '', redirectTo: 'user/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
