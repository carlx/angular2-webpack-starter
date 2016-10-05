import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import {SuccessComponent} from './registration/success.component';



export const EVENTS_ROUTES: Routes = [
  { path: 'success', component: SuccessComponent}
];
