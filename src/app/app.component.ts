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
  isClicked:boolean=false
 title: string= 'Sample Tutorials';
  appName:string='sample';
  name:string='Shubham';
  fullName:string='Shubham Gupta'
  personalData= {
    name:'Akash',
    age:24,
    qualification:'Graduate'
  }
  array=[1,2,4,67]
  a=12;
  b=14;
url= window.location.href

  getFullName(){
    return this.fullName;
  }

 onClick(){
   this.isClicked=true;
  console.log('isClickedValue=>>>>', this.isClicked)
 }
}
