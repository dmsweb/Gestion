import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongesService {

  constructor(
    private Http: HttpClient
  ) { }
  nouveauConge(conge: any){
    return this.Http.post<any>(`${environment.apiUrl}/api/conges`, conge);
  }
  getAllConges(){
    return this.Http.get(`${environment.apiUrl}/api/conges`);
  }
}
