import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { SuccessComponent } from './event/registration/success.component';
import { RegistrationFormComponent } from './event/registration/registration-form.component';
import { FailureComponent } from './event/registration/failure.component';
import {RegistrationWrapperComponent} from './event/registration/registration-wrapper.component';

export const ROUTES: Routes = [
  { path: '', component: RegistrationFormComponent},
  { path: 'registration/:eventId', component: RegistrationWrapperComponent},
  { path: 'registration/response/success/:eventId', component: RegistrationWrapperComponent},
  { path: 'registration/response/failure/:eventId', component: RegistrationWrapperComponent}
];
