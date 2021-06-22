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
  loadPage(page){
    return this.Http.get(`${environment.apiUrl}/api/listeEmployes?page=${page}`);
  
  }

   listeEmployer(page: number){
     return this.Http.get(`${environment.apiUrl}/api/listeEmployes?page=${page}`);
   }
   getEmploye(){
     return this.Http.get(`${environment.apiUrl}/api/listeEmployes`);
   }
   deleteEmploye(id: number){
    return this.Http.delete(`${environment.apiUrl}/api/employes/${id}`);

  }
}
