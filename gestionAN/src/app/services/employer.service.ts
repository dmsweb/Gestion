import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(
    private Http: HttpClient
  ) { }

  ajoutEmployer(employe: any){
    return this.Http.post<any>(`${environment.apiUrl}/api/Employer`, employe);
  }

   listeEmployer(){
     return this.Http.get(`${environment.apiUrl}/api/listeEmployes`);
   }
}
