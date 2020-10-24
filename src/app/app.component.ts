import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:'<button (click)="onClick()">Click me!</button>'
  // template:'<p>hello{{5+5}}</p>'
  // template:'<h1>hello</h1>'
  templateUrl:'app.component.html'



})
export class AppComponent {
    name='Shubham Gupta'
    personalData={
      age:25,
      height:'6ft'
    }
    arrayData=[{
      name:'Shubham',
      lastName:'Gupta'
    },
  
    {
      name:'Skand',
      lastName:'Mishra'
    },

    {
      name:'Bp',
      lastName:'Upadhyay'
    }

  ]

  parentComponent(data){
    console.log('parent Data =>>>', data)
  }
}
