import { environment } from 'src/environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthentifierService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser:         Observable<User>;

  constructor(
   private Http: HttpClient
  ) { 
    
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  login(username: string, password: string)
  {
    console.log(environment.apiUrl);

    return this.Http.post<User>(`${environment.apiUrl}/api/login_check`, {username, password,}).pipe(
      map(user => {
       localStorage.setItem('currentUser', JSON.stringify(user));
       this.currentUserSubject.next(user);
       return user;
    }))
  }
  public get currentUserValue(): User
  {
    return this.currentUserSubject.value;
  }
  loggout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
