import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../modle/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  userArray: Array<User> = new Array<User>();
  user: User;

  constructor(private  routerActive: ActivatedRoute) { }

  ngOnInit(): void {

    this.userArray.push(this.getUserDetails('1', 'Anuradha','Anuradha Malalasena,\n'+'Freelance Software Engineer, Tech Lead, graduated from University of Moratuwa - Sri Lanka. Presently working for Geveo Australasia (Pvt) Ltd. Passionate about software development based on Microsoft Technologies Stack and willing to take on challenges.\n' + '\n' + 'Certified Scrum Master (CSM)\n' + 'Microsoft Certified Professional Developer (MCPD)\n' + '\n' + 'Specialties: C#, ASP.NET , MVC, WCF, JQuery, Knockout, Microsoft SQL Server, SSRS, SSIS','assets/img/anuradha.jpg'));
    this.userArray.push(this.getUserDetails('2', 'Chamin','Chamin De Silva,\n' + 'Senior Technical Team Lead at CodeGen International, Experienced Technical Team Lead with a demonstrated history of working in the computer software industry and fast learner. Skilled in Java, Angular, PHP, Erlang, R, and Linux. Strong information technology professional graduated from CSE, University of Moratuwa and UCSC, University of Colombo.','assets/img/chamin.jpg'));
    this.userArray.push(this.getUserDetails('3', 'Sukitha','Sukitha Jayasinghe,\n' + 'Software Architect with 10+ years experience designing and developing enterprise and cloud applications,Experienced Software Architect with a demonstrated history of working in the computer software industry. Strong arts and design professional skilled in Session Initiation Protocol (SIP), DevOps, Design patterns, nodejs golang and c#. ','assets/img/sukitha.jpg'));
    this.userArray.push(this.getUserDetails('4', 'Yasiru','Yasiru Lakshitha','assets/img/yasiru.jpg'));
    this.userArray.push(this.getUserDetails('5', 'Pavithra','Pavithra Herath','assets/img/pavithra.jpg'));

    this.routerActive.params.subscribe(params => {
      if (params.name != null){
        this.searchUser(params.name);

      }
    });

  }

  // tslint:disable-next-line:typedef
  getUserDetails(id: string, name: string,address: string,imagePath: string){
    this.user = new User();
    this.user.id = id;
    this.user.name = name;
    this.user.address= address;
    this.user.imagePath =imagePath;
    return this.user;
  }


  // tslint:disable-next-line:typedef
  searchUser(name: any) {
    console.log(name)
    this.user = this.userArray.find(value => value.name === name);
  }
}
