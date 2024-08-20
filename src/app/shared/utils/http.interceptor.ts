import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const opt = token ? { setHeaders: { 'authorization': token } } : {};
        const reqClone = req.clone({ ...opt });
        return next
            .handle(reqClone)
            .pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                        //console.log('---> status:', evt.status);
                    }
                }),
                catchError((error) => {
                    alert('ERROR \n' + JSON.stringify(error, null, 4));
                    return throwError(error);
                })
            )
    }
}
