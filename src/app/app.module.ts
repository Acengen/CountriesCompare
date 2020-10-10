import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardGuardGuard } from './dashboard-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:"", redirectTo:"/form-page", pathMatch:"full"},
    {path: "form-page", component:FormPageComponent},
    {path: "dashboard", component:DashboardPageComponent, canActivate:[DashboardGuardGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    DashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
