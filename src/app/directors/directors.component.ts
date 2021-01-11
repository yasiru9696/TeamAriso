import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../modle/user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  directorArray: User[] = [];
  director: User;

  constructor(private  routerActive: ActivatedRoute, private userService:UserService)
  {
    this.directorArray=this.userService.getDirector();
  }

  ngOnInit(): void {

    this.routerActive.params.subscribe(params => {
      if (params.name != null){
        this.searchDirector(params.name);
      }
    });
  }

  searchDirector(name: any) {
    console.log(name)
   this.director = this.directorArray.find(value => value.name === name);
  }
}
