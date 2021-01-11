import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DevsComponent} from './devs/devs.component';
import {DirectorsComponent} from './directors/directors.component';
import {UserModule} from './user/user.module';
import {UserService} from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    DevsComponent,
    DirectorsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
