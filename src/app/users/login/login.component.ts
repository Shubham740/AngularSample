import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    userName:string ='Shubham'
    password='12345678'

  constructor() { }

  ngOnInit(): void {
  }

}
