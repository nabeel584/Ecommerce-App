import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './module/sign-in/components/signInComponent/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import  routes from './routes';
import { SignInModule } from './module/sign-in/sign-in.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './module/dashboard/dashboard.module';





@NgModule({
  declarations: [
   AppComponent,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SignInModule,

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
