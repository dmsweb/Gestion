import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private Http: HttpClient
  ) { }
  
  getProfile(){
    return this.Http.get(`${environment.apiUrl}/api/profiles`);
   
  }
}
