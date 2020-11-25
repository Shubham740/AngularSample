import { Component } from '@angular/core';
import {UserDataService} from './user-data.service';
import {DummySeriveService} from './dummy-serive.service';
import {dataType} from './users/user'



@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  templateUrl: 'app.component.html'



})

export class AppComponent {
    name = '';
    age = -1;
    id = -1;
    data= [];

  constructor(private user: UserDataService, private dummyService: DummySeriveService){
      const  data: dataType= this.user.getData();
      this.name = data.name;
      this.id = data.id;
      this.age=data.age
         
        // this.data= dummyData;

 

    }



}
