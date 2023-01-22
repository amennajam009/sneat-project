import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './Mainportal/Header/header/header.component';




const routes: Routes = [
  {path:'dashboard' , component:DashboardComponent},
  {path:' ' , component:DashboardComponent},
  {path:'header ' , component:HeaderComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
