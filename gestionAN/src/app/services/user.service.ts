import { Observable } from 'rxjs';
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Http: HttpClient) { }
  
 creerUser(data)
 {
   return this.Http.post<any>(`${environment.apiUrl}/api/users`, data);
 }
  
 getStatus(id: number){
  return this.Http.get(`${environment.apiUrl}/api/status/${id}`);
}
loadPage(page){
  return this.Http.get(`${environment.apiUrl}/api/liste/users?page=${page}`);

}
  listerUser(page: number){
    return this.Http.get(`${environment.apiUrl}/api/liste/users?page=${page}`);
  }
  getUser(){
    return this.Http.get(`${environment.apiUrl}/api/users`);
  }
  
  getUserById(id: number): Observable<User>{
    return this.Http.get<User>(`${environment.apiUrl}/api/users/${id}`);
  }
  updateUser(id: number, usee: User): Observable<Object>{
    return this.Http.put(`${environment.apiUrl}/api/users/${id}`, usee);
  }

  deleteUser(id: number){
    return this.Http.delete(`${environment.apiUrl}/api/users/${id}`);
  }
}
