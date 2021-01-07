import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaviComponent} from './navi/navi.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {path: '', component : NaviComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch : 'full'},
    {path: 'dashboard', component : DashboardComponent},
    {path: 'user', component : UserComponent},
    {path: 'user/:name', component : UserComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
