import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(
    private Http: HttpClient
  ) { }

  nouveauPermission(permission: any){
   return this.Http.post<any>(`${environment.apiUrl}/api/permissions`, permission);
  }
}
