import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // lognedin=false;
  lognedin$: BehaviorSubject <boolean>;
  // title = 'todo-list';
  lognedin: any;
  constructor ( private authService:AuthService ){
    this.lognedin$=this.authService.lognedin$;
  }

  ngOnInit(){
  // this.authService.checkAuth().subscribe(()=>{});

 this.authService.lognedin$.subscribe(lognedin=>{
  this.lognedin=lognedin;
 })
}

}


