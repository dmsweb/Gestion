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

  deleteUser(id: number){
    return this.Http.delete(`${environment.apiUrl}/api/users/${id}`);

  }
}
