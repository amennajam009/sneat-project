import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { BlankComponent } from './Mainportal/Layouts/blank/blank.component';
import { ContainerComponent } from './Mainportal/Layouts/container/container.component';
import { FluidComponent } from './Mainportal/Layouts/fluid/fluid.component';
import { WithoutMenuComponent } from './Mainportal/Layouts/without-menu/without-menu.component';
import { WithoutNavbarComponent } from './Mainportal/Layouts/without-navbar/without-navbar.component';





const routes: Routes = [
  {path:'dashboard' , component:DashboardComponent},
  {path:' ' , component:DashboardComponent},
  {path:'without-menu' , component:WithoutMenuComponent},
  {path:'without-navbar' , component:WithoutNavbarComponent},
  {path:'container' , component:ContainerComponent},
  {path:'fluid' , component:FluidComponent},
  {path:'blank' , component:BlankComponent},




 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
