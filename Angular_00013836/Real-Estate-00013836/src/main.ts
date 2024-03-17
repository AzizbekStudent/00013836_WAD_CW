import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// Student ID: 00013836
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
