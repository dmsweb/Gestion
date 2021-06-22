import { User } from './../models/user';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users: [{ "username":"","password":"","roles":['ROLE_ADMIN','ROLE_SECRETAIRE']},
                  {"username":"","password":"","roles":['ROLE_EMPLOYE']}]

    public loggeUser:string;
    public isloggeIn:Boolean = false;
    public roles:string[];
   
    



  constructor() { }
  login(user: User){
    let validUser: Boolean=false;

    
   
    
  }
}
