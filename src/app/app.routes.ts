import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import {RegistrationWrapperComponent} from './event/registration/registration-wrapper.component';
import {InvalidPathComponent} from './shared/components/invalid-path.component';

export const ROUTES: Routes = [
  { path: '', component: InvalidPathComponent},
  { path: 'registration/:eventId', component: RegistrationWrapperComponent},
  { path: 'registration/response/success/:eventId', component: RegistrationWrapperComponent},
  { path: 'registration/response/failure/:eventId', component: RegistrationWrapperComponent}
];
