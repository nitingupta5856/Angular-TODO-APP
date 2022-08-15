import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { LogoutComponent } from '../logout/logout.component';
import { HomeComponent } from '../inbox/home/home.component';

const routes: Routes = [
  {path:'register', component : RegisteruserComponent},
  {path :'', component:LoginComponent},
  {path :'logout', component: LogoutComponent},
  
  // {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
