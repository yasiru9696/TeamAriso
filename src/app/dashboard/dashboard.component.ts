import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../modle/user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   directorArray: Array<User> = new Array<User>();
   devArray: Array<User> = new Array<User>();

  constructor(private router: Router, private userService: UserService) {

    this.directorArray=this.userService.getDirector();
    this.devArray=this.userService.getDev();
  }
  ngOnInit(): void {
  }
  routeDirector(name: string) {
    this.router.navigate(['director', name]);
  }
  routeDev(name: string) {
    this.router.navigate(['dev', name]);
  }
}
