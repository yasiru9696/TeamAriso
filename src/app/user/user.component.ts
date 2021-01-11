import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../modle/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {


  @Input() user: User;

  constructor(private  routerActive: ActivatedRoute) { }

  ngOnInit(): void {


  }

}
