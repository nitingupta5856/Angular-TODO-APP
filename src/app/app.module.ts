import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisteruserComponent } from './auth/registeruser/registeruser.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LogoutComponent } from './logout/logout.component';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { HomeComponent } from './inbox/home/home.component';
import { AuthHttpInterceptor } from './auth/auth-http-interceptor';
// import { TaskidComponent } from './model/taskid/taskid.component';

@NgModule({
  declarations: [
    AppComponent,
    // LogoutComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    // RegisteruserComponent,
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor ,multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
