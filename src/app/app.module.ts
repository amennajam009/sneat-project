import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { LayoutsComponent } from './Mainportal/Layouts/layouts/layouts.component';
import { WithoutMenuComponent } from './Mainportal/Layouts/without-menu/without-menu.component';
import { WithoutNavbarComponent } from './Mainportal/Layouts/without-navbar/without-navbar.component';
import { ContainerComponent } from './Mainportal/Layouts/container/container.component';
import { FluidComponent } from './Mainportal/Layouts/fluid/fluid.component';
import { BlankComponent } from './Mainportal/Layouts/blank/blank.component';
import { FooterComponent } from './Mainportal/footer/footer/footer.component';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { AccountsComponent } from './Mainportal/Accounts/accounts/accounts.component';
import { NotificationComponent } from './Mainportal/Accounts-setting/notification/notification.component';
import { ConnectionsComponent } from './Mainportal/Accounts-setting/connections/connections.component';
import { AccountComponent } from './Mainportal/Account/account/account.component';
import { ConnectionComponent } from './Mainportal/Account/connection/connection.component';




@NgModule({
  declarations: [
    AppComponent,
    
    LayoutsComponent,
    WithoutMenuComponent,
    WithoutNavbarComponent,
    ContainerComponent,
    FluidComponent,
    BlankComponent,
    FooterComponent,
    DashboardComponent,
    AccountsComponent,
    NotificationComponent,
    ConnectionsComponent,
    AccountComponent,
    ConnectionComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
