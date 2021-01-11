import { Injectable } from '@angular/core';
import {User} from './modle/user';

@Injectable()
export class UserService {

  getDirector(): User[] { return [
    { id: 1, name: 'Anuradha ', address:'dir',designation:'developer',imagePath:'assets/img/anuradha.jpg'},
    { id: 2, name: 'Chamin', address:'dir',designation:'director',imagePath:'assets/img/chamin.jpg' },
    { id: 3, name: 'Sukitha', address:'dir',designation:'director',imagePath:'assets/img/sukitha.jpg'},
  ]; }

  getDev(): User[] { return [
    { id: 4, name: 'Yasiru',address:'dev',designation:'developer',imagePath:'assets/img/yasiru.jpg' },
    { id: 5, name: 'Pavithra',address:'dev',designation:'developer',imagePath:'assets/img/pavithra.jpg'},
  ]; }
}
