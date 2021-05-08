import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { AuthentifierService } from 'src/app/services/authentifier.service';
import { Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private authentifierService: AuthentifierService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err =>{
            if (err.status === 401) {
                this.authentifierService.loggout();
                
            }
            const error= err.error.message || err.statusText;
            return throwError(error);
             
        }))
      
    }
}