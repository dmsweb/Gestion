import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthentifierService } from 'src/app/services/authentifier.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authentifierService: AuthentifierService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let currentUser = this.authentifierService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders:{ Authorization: `Bearer ${currentUser.token}`

                }
            });
            
        }
        return next.handle(request);
    }
}