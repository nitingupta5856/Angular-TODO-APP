import { Component, NgModule, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/model/task';
import { HTTP_INTERCEPTORS , HttpClientModule} from '@angular/common/http';
import { AuthHttpInterceptor } from 'src/app/auth/auth-http-interceptor';
import { Router } from '@angular/router';
// import { TaskID } from 'src/app/model/task-id';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
      //   {
      //   provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor ,multi:true
      // }
    ],
})
export class HomeComponent implements OnInit {
  modalOpen=false;
  taskObj:Task=new Task();
  taskArr:Task[]=[];
  addTaskValue:string='';
  editTaskValue:string='';
  // description:any;
  constructor(private  authService: AuthService,
    private router:Router  ) { }

  ngOnInit(): void {
    this.editTaskValue='';
    this.addTaskValue='';
    this.taskObj=new Task();
    this.taskArr=[];
    this.getAllTask()
  }
  getAllTask(){
    this.authService.getAllTask().subscribe({
      next:(response:any)=>{
        // console.log(response)
        const{data}=response;
        this.taskArr=data;
        // console.log(this.taskArr)
       
    }
   ,error:err=>{
    console.log (err);
   }
   }
    )
  }

  add(){
    // console.log(this.addTaskValue)
    this.taskObj.description=this.addTaskValue;
    // console.log(this.taskArr[0])
    // console.log(this.taskObj)
    this.authService.addTask(this.taskObj).subscribe({
      next:(response)=>{
        // console.log(response)
       
       
        this.ngOnInit();
        this.addTaskValue='';
        
    },
    error:err=>{
      console.log (err);
    }
    }
    )
  }
  editTask(){

    this.taskObj.description=this.editTaskValue;
    console.log(this.taskObj.description)
    
    
    this.authService.editTask(this.taskObj).subscribe({
      
      next:(res)=>{
        console.log(res)
      
       
          
         this.ngOnInit();
         
    },
    error:err=>{
      
      console.log ('fail to update task');
    }
    }
    )
  }
  deleteTask(dlttask:Task){
console.log(dlttask)
    this.authService.deleteTask(dlttask).subscribe({
      next:()=>{

     
       
       
        this.ngOnInit();
      
    },
    error:err=>{
      
      console.log (err);
    }
    }
    )
  }



  
openPopup(etask:Task) {
  this.modalOpen=! this.modalOpen
  console.log(etask)
  this.taskObj=etask;
      this.editTaskValue=etask.description
      console.log(this.editTaskValue)
 
}
closePopup(){
  this.modalOpen=false;
}



}
