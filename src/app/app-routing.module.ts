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
import { LoginComponent } from './Mainportal/Auth/login/login.component';
import { RegisterComponent } from './Mainportal/Auth/register/register.component';
import { ForgetPasswordComponent } from './Mainportal/Auth/forget-password/forget-password.component';
import { ErrorComponent } from './Mainportal/Error/error/error.component';
import { UnderMaintenanceComponent } from './Mainportal/Error/under-maintenance/under-maintenance.component';
import { CardsComponent } from './Mainportal/Cards/cards/cards.component';
import { AccordionComponent } from './Mainportal/user-interface/accordion/accordion.component';
import { AlertsComponent } from './Mainportal/user-interface/alerts/alerts.component';
import { CollapseComponent } from './Mainportal/user-interface/collapse/collapse.component';





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
  {path:'notification', component:NotificationComponent},
  {path:'Login' , component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'Error',component:ErrorComponent},
  {path:'under-maintenance',component:UnderMaintenanceComponent},
  {path:'cards',component:CardsComponent},
  {path:'accordion',component:AccordionComponent},
  {path:'alerts',component:AlertsComponent},
  {path:'collapse',component:CollapseComponent}



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
