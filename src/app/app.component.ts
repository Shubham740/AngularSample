import { Component } from '@angular/core';
import {UserDataService} from './user-data.service';
import {DummySeriveService} from './dummy-serive.service';
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
  constructor(private user: UserDataService, private dummyService: DummySeriveService){
      const  data = this.user.getData();
      this.name = data.name;
      this.age = data.age;
      this.id = data.id;

    this.dummyService.getData().subscribe(dummyData=>{
        console.log('data=>>>',dummyData)
    })

    }



}
