import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/signInComponent/sign-in.component';
import { PasswordComponent } from './components/password/password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    PasswordComponent,
  
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SignInModule { }
