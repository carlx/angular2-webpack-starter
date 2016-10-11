import { NgModule, ApplicationRef } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import {CommonModule} from '@angular/common';
import {SuccessComponent} from './registration/success.component';
import {RouterModule} from '@angular/router';
import {EVENTS_ROUTES} from './events.routes';
import {EventInfoComponent} from './event-info/event-info.component';
import {RegistrationFormComponent} from './registration/registration-form.component';
import {FailureComponent} from './registration/failure.component';
import {SpinnerComponent} from '../shared/components/spinner/spinner.component';
import {NegatePipe} from '../shared/pipes/negate.pipe';
import {EvenemInfoComponent} from './registration/evenem-info.component';
import {TimeDirective} from '../shared/directives/time.directive';
import {SummaryComponent} from './registration/summary.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CollapseModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ],
  declarations: [
    RegistrationFormComponent,
    SuccessComponent,
    FailureComponent,
    EventInfoComponent,
    SpinnerComponent,
    NegatePipe,
    EvenemInfoComponent,
    TimeDirective,
    SummaryComponent
  ],
  exports: [
    RegistrationFormComponent,
    SuccessComponent,
    EventInfoComponent,
    FailureComponent,
    SpinnerComponent
  ]
})
 export class EventsModule {}
