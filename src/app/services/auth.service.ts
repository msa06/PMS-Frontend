import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AuthState:boolean;

  users:User[]= [
    new User('test','test')
  ];

  constructor( private route:Router) { }

  validateLogin(email:string,password:string){
    this.users.forEach((user)=>{
      if(user.email == email && user.password == password){
        this.AuthState = true;
      }
      else{
        this.AuthState = false;
      }
    })
    this.redirectUser();
  }
  redirectUser(){
    if(this.AuthState){
      console.log("Login Success!");
      this.route.navigate(['/']);
   }
    else{
      this.route.navigate(['/login']);
      console.log("Login Failed");
      
    }
  }

}
