import { Component, OnInit } from '@angular/core';
import {Login} from "../../Interface/login";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | undefined;
  password: string | undefined;

  login: Login | undefined;


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    if(this.email==='razmy@gmail.com' && this.password==='123'){
      console.log('login success');

    }else{
      console.log('login failed');
    }

  }

  signIn(value: any) {

  }
}
