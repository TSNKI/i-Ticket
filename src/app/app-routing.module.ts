import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppHomeComponent} from './app-home/app-home.component';

const routes: Routes = [
  {path: 'user/login', component: LoginComponent},
  {path: '', component: AppHomeComponent},
  // { path: '', redirectTo: 'user/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
