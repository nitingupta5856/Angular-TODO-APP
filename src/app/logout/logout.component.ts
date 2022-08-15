import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService :AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.logout().subscribe(()=>{
this.router.navigateByUrl('/');
    })
  }
  onSubmit(){
  
    // this.authService.logout().subscribe({
    //   next:() =>{
    //     this.router.navigateByUrl('/')
    //   },
   
    // })
  }

}
