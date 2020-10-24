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
  nameArray=[{
      name:'Sachin',
      lastName:'Gupta',
      age:28

  },
  {
    name:'Shubham',
    lastName:'Gupta',
    age:25

},
{
  name:'Vishal',
  lastName:'Gupta',
  age:30

},


]
  a=12;
  b=14;
url= window.location.href

password='shubham'
customColor='blue'

  getFullName(name){
      alert(name)
  }

  isShowed(){
  return (this.password.length%2!=0)?true:false
  }
updateColor(){
  this.customColor='green'
}
  
 onClick(){
   this.isClicked=true;
  console.log('isClickedValue=>>>>', this.isClicked)
 }
 myEvent(event){
  console.log('event =>>>>', event)
  this.fullName=event;
  console.log('full name =>>>>',this.fullName)
 }
}
