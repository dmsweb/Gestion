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
  
 creerUser(data: any)
 {
   return this.Http.post<any>(`${environment.apiUrl}/api/users`, data);
 }
  getAll(){
    return this.Http.get(`${environment.apiUrl}/api/liste/users`);
  }
  getStatus(id: number){
    return this.Http.get(`${environment.apiUrl}/api/status/${id}`);
  }

  deleteUser(id: number){
    return this.Http.delete(`${environment.apiUrl}/api/liste/users/${id}`);

  }
}
