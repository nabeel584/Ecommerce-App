import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./module/sign-in/components/signInComponent/sign-in.component";
import { Title } from "@angular/platform-browser";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { SignUpComponent } from "./module/sign-in/components/sign-up/sign-up.component";
import { PasswordComponent } from "./module/sign-in/components/password/password.component";
import { HomepageComponent } from "./module/dashboard/components/homepage/homepage.component";
import { AuthenticatedGuard } from "./guards/authenticated.guard";



// const routes: any = [

//     { path: '', component: NavbarComponent },
//     { path: 'home', component: NavbarComponent },
//     // Other route configurations...
//   ];

// export default routes

const routes: Routes = [
    {
        path: '', component: SignInComponent, children: [{
            path: 'signIn', component: SignInComponent
        },

        ]
    },
    // { path: 'home', component: NavbarComponent},
    {
        path: 'signUp', component: SignUpComponent, children: [
            { path: 'singIn', component: SignInComponent },

        ]
    },
    { path: 'Password', component: PasswordComponent },
    {
        path: 'productPage', component: HomepageComponent,
        canActivate: [AuthenticatedGuard]
    }


];

export default routes