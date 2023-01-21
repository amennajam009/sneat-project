import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Mainportal/Dashboard/dashboard/dashboard.component';
import { LayoutsComponent } from './Mainportal/Layouts/layouts/layouts.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutsComponent,

   
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
