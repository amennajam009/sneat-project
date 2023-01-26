import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Mainportal/footer/footer/footer.component';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { BlankComponent } from './Mainportal/Layouts/blank/blank.component';
import { ContainerComponent } from './Mainportal/Layouts/container/container.component';
import { FluidComponent } from './Mainportal/Layouts/fluid/fluid.component';
import { WithoutMenuComponent } from './Mainportal/Layouts/without-menu/without-menu.component';
import { WithoutNavbarComponent } from './Mainportal/Layouts/without-navbar/without-navbar.component';
import { AccountComponent } from './Mainportal/Account/account/account.component';
import { ConnectionComponent } from './Mainportal/Account/connection/connection.component';
import { NotificationComponent } from './Mainportal/Account/notification/notification.component';





const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'without-menu' , component:WithoutMenuComponent},
  {path:'without-navbar' , component:WithoutNavbarComponent},
  {path:'container' , component:ContainerComponent},
  {path:'fluid' , component:FluidComponent},
  {path:'blank' , component:BlankComponent},
  {path:'footer', component:FooterComponent},
  {path:'account', component:AccountComponent},
  {path:'connection', component:ConnectionComponent},
  {path:'notification', component:NotificationComponent}


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
