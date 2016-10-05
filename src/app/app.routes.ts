import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';
import { DataResolver } from './app.resolver';
import {SuccessComponent} from './event/registration/success.component';
import {RegistrationFormComponent} from './event/registration/registration-form.component';
import {FailureComponent} from './event/registration/failure.component';



export const ROUTES: Routes = [
  { path: '', component: RegistrationFormComponent},
  { path: 'registration/:eventId', component: RegistrationFormComponent},
  { path: 'registration/after/success', component: SuccessComponent},
  { path: 'registration/after/failure', component: FailureComponent}
];
