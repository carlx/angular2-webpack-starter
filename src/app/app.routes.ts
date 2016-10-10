import { Routes } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { SuccessComponent } from './event/registration/success.component';
import { RegistrationFormComponent } from './event/registration/registration-form.component';
import { FailureComponent } from './event/registration/failure.component';

export const ROUTES: Routes = [
  { path: '', component: RegistrationFormComponent},
  { path: 'registration/:eventId', component: RegistrationFormComponent},
  { path: 'registration/response/success', component: SuccessComponent},
  { path: 'registration/response/failure', component: FailureComponent}
];
