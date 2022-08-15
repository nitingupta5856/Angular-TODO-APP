import { Injectable } from '@angular/core';
import {  CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree,Resolve , Router, ActivatedRouteSnapshot} from '@angular/router';
import { from, Observable} from 'rxjs';
import { AuthService } from './auth.service';
import {take, skipWhile, tap} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
  constructor( private authService:AuthService,
    private router:Router)
  {}

  canLoad(
    route: Route,
    segments: UrlSegment[]):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.lognedin$.pipe(
      skipWhile (value =>value ===null),
      take (1),
      tap (authenticated =>{
        if(!authenticated){
          this.router.navigateByUrl('/')
        }
      })
    )
  }
}
