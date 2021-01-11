import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import {Logger} from './logger.service';


@Component({
  selector: 'app-ingector',
  templateUrl: './ingector/ingector.component.html',
  styleUrls: ['./ingector/ingector.component.css']
})
export class IngectorComponent implements OnInit {
  userService: UserService;

  constructor(userService: UserService) { }

  ngOnInit(): void {
  }

}
