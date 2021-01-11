import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaviComponent} from './navi/navi.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {DevsComponent } from './devs/devs.component';
import {DirectorsComponent } from './directors/directors.component';



const routes: Routes = [
  {path: '', component : NaviComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch : 'full'},
    {path: 'dashboard', component : DashboardComponent},
    {path: 'dev', component : DevsComponent},
    {path: 'dev/:name', component : DevsComponent},
    {path: 'director', component : DirectorsComponent},
    {path: 'director/:name', component : DirectorsComponent},

  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
