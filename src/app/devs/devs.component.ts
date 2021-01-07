import { Component, OnInit } from '@angular/core';
import {Dev} from '../modle/dev';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dev',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.css']
})
export class DevsComponent implements OnInit {

  devArray: Array<Dev> = new Array<Dev>();
  devs: Dev;

  constructor(private  routerActive: ActivatedRoute) { }

  ngOnInit(): void {

    this.devArray.push(this.getDevDetails('4', 'Yasiru','Yasiru Lakshitha','assets/img/yasiru.jpg'));
    this.devArray.push(this.getDevDetails('5', 'Pavithra','Pavithra Herath','assets/img/pavithra.jpg'));


    this.routerActive.params.subscribe(params => {
      if (params.name != null){
        this.searchDev(params.name);

      }
    });

  }

  // tslint:disable-next-line:typedef
  getDevDetails(id: string, name: string,address: string,imagePath: string){
    this.devs = new Dev();
    this.devs.id = id;
    this.devs.name = name;
    this.devs.address= address;
    this.devs.imagePath =imagePath;
    return this.devs;
  }


  // tslint:disable-next-line:typedef
  searchDev(name: any) {
    console.log(name)
    this.devs = this.devArray.find(value => value.name === name);
  }
}
