import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './inbox/home/home.component';

const routes: Routes = [
  {
  path:'todo-list',
  component : HomeComponent
  // canLoad:[AuthGuard],
 
  //  loadChildren :()=>import('./inbox/home/home.component').then(mod=>mod.InboxModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
