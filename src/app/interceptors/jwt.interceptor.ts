import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
    private api = environment.api;

    public constructor() { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const JWT = localStorage.getItem('JWT');

        if (JWT && request.url.indexOf(this.api) !== -1) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + JWT
                }
            });
        }

        return next.handle(request);
    }
}
