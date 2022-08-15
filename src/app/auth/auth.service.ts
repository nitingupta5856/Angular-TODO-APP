import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs';
import{Task} from '../model/task'
import { TaskID } from '../model/task-id';
// import { TaskID } from '../model/task-id';

// interface LoggedResponse{
//   authenticated:boolean;
//   name:string;
// }
// interface LoginCredentials{
//   email:string;
//   password:string
// }

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // editTask: any;
    onSubmit() {
        throw new Error("Method not implemented.");
    }
  rootUrl = "https://api-nodejs-todolist.herokuapp.com/task";
  lognedin$= new  BehaviorSubject(null);
  // signed$=new  BehaviorSubject(null);
 
 

  constructor( private http: HttpClient,
   
    ) {
      // this.autoSignIn();
    }
  
  registeruser(credentials:any){
  return this.http.post<any>(
   'https://api-nodejs-todolist.herokuapp.com/user/register' ,
   credentials
  ).pipe(
    tap(()=>{
      this.lognedin$.next(true);
    })
  );
  }
  // checkAuth(){
  //   return this.http.get <LoggedResponse>('https://api-nodejs-todolist.herokuapp.com/user/me',{
  //     
  //   }
   
  //   ).pipe(
  //     tap (({authenticated}) =>{
  //      this.lognedin$.next(authenticated);
  //     })
  //   )
  //  }

   logout(){
    return this.http.post('https://api-nodejs-todolist.herokuapp.com/user/logout',{}).pipe(
      tap (()=>{
        this.lognedin$.next(false);
      })
    )
    
   }
   login(credentials:any){
    return this.http.post<any>('https://api-nodejs-todolist.herokuapp.com/user/login',credentials)
    .pipe(
      tap (()=>{
        // return localStorage.getItem('token')
        localStorage.setItem("token",JSON.stringify(credentials))
        this.lognedin$.next(true);
        // localStorage.setItem('UserData',JSON.stringify(this.login))
      })
    )
   }
  //  autoSignIn(){
  //   const userData =JSON.parse(localStorage.getItem('UserData'));
   
  //   return;
  //  }

 addTask(task:Task):Observable<Task>{
  // console.log(task)
   localStorage.getItem('token')
  return this.http.post<Task>('https://api-nodejs-todolist.herokuapp.com/task',{"description": task.description})
  
  .pipe(
    tap (()=>{
      // return localStorage.getItem('token')
      // return localStorage.getItem('token')
      // this.lognedin$.next(true);
     
    })
  )
 }
 getAllTask():Observable<any[]>{
  localStorage.getItem('token')
  return this.http.get<any[]>('https://api-nodejs-todolist.herokuapp.com/task')
 }
 deleteTask(task:Task):Observable<Task>{
  return this.http.delete<Task>( 'https://api-nodejs-todolist.herokuapp.com/task'+'/'+task._id  )
  }
editTask(task:Task):Observable<any>{
  // console.log(task)
return this.http.put<any>('https://api-nodejs-todolist.herokuapp.com/task'+'/'+task._id,{"completed":true})

}


 getToken(){
  return localStorage.getItem('token')
 }
}





