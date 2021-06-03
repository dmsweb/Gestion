import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private Http: HttpClient
  ) { }
  getService(){
    return this.Http.get(`${environment.apiUrl}/api/services`);
  }
}
