import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { inject, Injectable } from "@angular/core";
import { tap, catchError } from 'rxjs/operators';
import { CoreService } from "../services/core.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    coreService  = inject(CoreService)
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const opt = token ? { setHeaders: { 'authorization': token } } : {};
        const reqClone = req.clone({ ...opt });
        // ustawiamy w serwisie core activeReq true
        this.coreService.httpActive.set(true);
        return next
            .handle(reqClone)
            .pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                        //console.log('---> status:', evt.status);
                        // ustawiamy w serwisie core activeReq false
                        this.coreService.httpActive.set(false);
                    }
                }),
                catchError((error) => {
                    alert('ERROR \n' + JSON.stringify(error, null, 4));
                    return throwError(error);
                })
            )
    }
}
