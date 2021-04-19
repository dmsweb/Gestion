import { User } from './../models/user';
import { AuthentificationService } from './../services/authentification.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(
    private authentificationService: AuthentificationService
  ) {

   }
  intercept(req: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<User>> 
  {
    let currentuser = this.authentificationService.currentUserValue;  
     if(currentuser && currentuser.token)
     {
      req = req.clone({
        setHeaders: {Authorization: `Bearer ${currentuser.token}`}
    });
     }
     return next.handle(req);
  }
}
