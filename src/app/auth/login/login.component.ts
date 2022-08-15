import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm=new  FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ],
  
    ) 
    ,
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    
    ])
  });

  constructor( private  authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.authForm.invalid){
      return;
    }
  
    this.authService.login(this.authForm.value).subscribe({
      next:response =>{
        const {token}=response
        localStorage.setItem('token',token)
        this.router.navigateByUrl('/todo-list')
      },
      error:(error)=>{
        if (error.email || error.password){
          this.authForm.setErrors ({credentials:true})
        }
        if(error.status===400){
          this.authForm.setErrors ({credentials:true})
        }
      }
      
    })
  }

}
