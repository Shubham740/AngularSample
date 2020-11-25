import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }


  // tslint:disable-next-line: typedef
  getData(){
    return{
      name: 'Shubham',
      age: 25,
      id: 1,
      completed: false,
        address:'Noida'
    };
  }

}
