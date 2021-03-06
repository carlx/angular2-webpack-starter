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
import {EvenemDescriptionComponent} from './registration/evenem-description.component';
import {EventDescriptionComponent} from './registration/event-description.component';
import {RegistrationWrapperComponent} from './registration/registration-wrapper.component';
import {PaymentAdvertComponent} from './registration/payment-advert.component';
import {InvalidPathComponent} from '../shared/components/invalid-path.component';

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
    SummaryComponent,
    EventDescriptionComponent,
    RegistrationWrapperComponent,
    PaymentAdvertComponent,
    InvalidPathComponent
  ],
  exports: [
    RegistrationWrapperComponent,
    FailureComponent
  ]
})
 export class EventsModule {}
