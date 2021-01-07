import { Component, OnInit } from '@angular/core';
import {Director} from '../modle/director';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

  directorArray: Array<Director> = new Array<Director>();
  director: Director;

  constructor(private  routerActive: ActivatedRoute) { }

  ngOnInit(): void {

    this.directorArray.push(this.getDirectorDetails('1', 'Anuradha','Anuradha Malalasena,\n'+'Freelance Software Engineer, Tech Lead, graduated from University of Moratuwa - Sri Lanka. Presently working for Geveo Australasia (Pvt) Ltd. Passionate about software development based on Microsoft Technologies Stack and willing to take on challenges.\n' + '\n' + 'Certified Scrum Master (CSM)\n' + 'Microsoft Certified Professional Developer (MCPD)\n' + '\n' + 'Specialties: C#, ASP.NET , MVC, WCF, JQuery, Knockout, Microsoft SQL Server, SSRS, SSIS','assets/img/anuradha.jpg'));
    this.directorArray.push(this.getDirectorDetails('2', 'Chamin','Chamin De Silva,\n' + 'Senior Technical Team Lead at CodeGen International, Experienced Technical Team Lead with a demonstrated history of working in the computer software industry and fast learner. Skilled in Java, Angular, PHP, Erlang, R, and Linux. Strong information technology professional graduated from CSE, University of Moratuwa and UCSC, University of Colombo.','assets/img/chamin.jpg'));
    this.directorArray.push(this.getDirectorDetails('3', 'Sukitha','Sukitha Jayasinghe,\n' + 'Software Architect with 10+ years experience designing and developing enterprise and cloud applications,Experienced Software Architect with a demonstrated history of working in the computer software industry. Strong arts and design professional skilled in Session Initiation Protocol (SIP), DevOps, Design patterns, nodejs golang and c#. ','assets/img/sukitha.jpg'));

    this.routerActive.params.subscribe(params => {
      if (params.name != null){
       this.searchDirector(params.name);

      }
    });

  }

  // tslint:disable-next-line:typedef
  getDirectorDetails(id: string, name: string,address: string,imagePath: string){
    this.director = new Director();
    this.director.id = id;
    this.director.name = name;
    this.director.address= address;
    this.director.imagePath =imagePath;
    return this.director;
  }


  // tslint:disable-next-line:typedef
  searchDirector(name: any) {
    console.log(name)
   this.director = this.directorArray.find(value => value.name === name);
  }
}
