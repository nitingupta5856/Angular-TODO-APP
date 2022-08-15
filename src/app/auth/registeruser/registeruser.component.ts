import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { UniqueUsername } from '../validators/unique-username';
// import { UniqueEmail } from '../validators/unique-email';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {
  // @Input () control :FormControl |any;
  authForm=new  FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
     
    ],
 
    ),
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
    
    ]),
    age: new FormControl('',[
      Validators.required,
      Validators.maxLength(2),
      Validators.pattern(/^[0-9]+$/)
    ])
  });

  constructor( 
    // private uniqueUsername:UniqueUsername,
    // private uniqueEmail:UniqueEmail
    private  authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.authForm.invalid){
    return;
  }

 this.authService.registeruser(this.authForm.value).subscribe({
// console.log(response)
next: response =>{
  localStorage.setItem('token',response.token)
  console.log(response)
  this.router.navigateByUrl('/')
},
error: err =>{
  console.log(err)

  if(!err.status){
    
    this.authForm.setErrors ({noConnection:true})

  }
  if(err.status===400){
    this.authForm.setErrors ({nouniqueemail:true})
  }
}
 });
}

}
