import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { SignInComponent } from './app/module/sign-in/components/signInComponent/sign-in.component';
import routes from './app/routes';





platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
