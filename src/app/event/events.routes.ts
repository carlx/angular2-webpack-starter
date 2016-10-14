import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';
import { SuccessComponent } from './registration/success.component';

export const EVENTS_ROUTES: Routes = [
  { path: 'success', component: SuccessComponent}
];
