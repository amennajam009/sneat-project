import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { LayoutsComponent } from './Mainportal/Layouts/layouts/layouts.component';
import { WithoutMenuComponent } from './Mainportal/Layouts/without-menu/without-menu.component';
import { WithoutNavbarComponent } from './Mainportal/Layouts/without-navbar/without-navbar.component';
import { ContainerComponent } from './Mainportal/Layouts/container/container.component';
import { FluidComponent } from './Mainportal/Layouts/fluid/fluid.component';
import { BlankComponent } from './Mainportal/Layouts/blank/blank.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutsComponent,
    WithoutMenuComponent,
    WithoutNavbarComponent,
    ContainerComponent,
    FluidComponent,
    BlankComponent,
    

   
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
