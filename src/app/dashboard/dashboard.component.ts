import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../modle/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   userArray: Array<User> = new Array<User>();

  private user: User;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userArray.push(this.getUserDetails('1', 'Anuradha'));
    this.userArray.push(this.getUserDetails('2', 'Chamin'));
    this.userArray.push(this.getUserDetails('3', 'Sukitha'));
    this.userArray.push(this.getUserDetails('4', 'Yasiru'));
    this.userArray.push(this.getUserDetails('5', 'Pavithra'));
  }

  // tslint:disable-next-line:typedef
  getUserDetails(id: string, name: string){
    this.user = new User();
    this.user.id = id;
    this.user.name = name;
    return this.user;
  }

  // tslint:disable-next-line:typedef
  routeUser(name: string) {
    this.router.navigate(['user', name]);
  }


}
