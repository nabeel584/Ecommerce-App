import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';



@NgModule({
  declarations: [
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
