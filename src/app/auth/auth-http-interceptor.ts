import { Injectable, Injector } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { Observable } from "rxjs";
import { tap, filter } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable({
    providedIn:'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private injector:Injector ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService=this.injector.get(AuthService)
       console.log(authService.getToken)
        let tokenizedReq =req.clone({
           setHeaders:{
            
            Authorization:`Bearer ${authService.getToken()}`

           }
        })
        // console.log("mytokenizedReq",tokenizedReq)

        return next.handle(tokenizedReq);
     
    }
}
