import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../modle/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dev',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {

  devArray: User[] = [];
  dev: User;

  constructor(private  routerActive: ActivatedRoute,private userService: UserService) {
    this.devArray=this.userService.getDev();
  }

  ngOnInit(): void {

    this.routerActive.params.subscribe(params => {
      if (params.name != null){
        this.searchDev(params.name);
      }
    });
  }

  searchDev(name: any) {
    console.log(name)
    this.dev = this.devArray.find(value => value.name === name);
  }
}
