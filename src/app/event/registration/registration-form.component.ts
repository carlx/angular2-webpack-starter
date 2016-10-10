import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateCheckBox } from '../../shared/validators/checkbox.validator';
import { validateEmail } from '../../shared/validators/email.validator';
import { validatePhone } from '../../shared/validators/phone.validator';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';
import { Subscription, Observable } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';
import {RegistrationService} from '../../shared/services/registration.service';

@Component({
  selector: 'registration-form',
  templateUrl: 'registration-form.component.html',
  styles: [
    require('./registration-form.css')
  ]
})

export class RegistrationFormComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  formSubmitted: boolean = false;
  subscription: Subscription;
  isRunning: Observable<boolean>;

  event: Object;


  public isCollapsedRegister:boolean = true;
  public isCollapsedMarketing:boolean = true;
  public register: FormControl = new FormControl(false, validateCheckBox);
  public checkAll: FormControl = new FormControl(false);
  public marketing: FormControl = new FormControl(false);
  public eventId: FormControl = new FormControl(null, Validators.required);

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _eventsService: EventsService,
    private _route: ActivatedRoute,
    private _registrationService: RegistrationService,
    private _loaderService: LoaderService,
    @Inject('windowRef') private _windowRef: any
  ) {}

  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      eventId: this.eventId,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, validateEmail]),
      phone: new FormControl('', [Validators.required, validatePhone]),
      notes: new FormControl(''),
      marketingAgreements: this._formBuilder.group({
        checkAll: this.checkAll,
        register: this.register,
        marketing: this.marketing
      })
    });

    this.isRunning = this._loaderService.contentIsLoading$;
    this._loaderService.contentIsLoading$.next(true);
    this._route.params.flatMap((param: any) => {
      this.eventId.patchValue(param['eventId']);
      return this._eventsService.getEventById(param.eventId)
    }).subscribe((result: Object) => {
      this._loaderService.contentIsLoading$.next(false);
      this.event = result;
    }, (error: any) => {
      this._loaderService.contentIsLoading$.next(false);
    });


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitForm() {
    this.formSubmitted = true;
    if(this.registerForm.invalid) return null;

    this._loaderService.contentIsLoading$.next(true);
    this._registrationService.registerToEvent(this.registerForm.value)
      .subscribe((result: any) => {
        if(result.paymentLink) {
          setTimeout(() => {
            this._windowRef.location.href = result.paymentLink;
            this._loaderService.contentIsLoading$.next(true);
          }, 2000);
        }
      }, (error: any) => {
        this._loaderService.contentIsLoading$.next(false);
      });
  }

  selectAll() {
    if (!this.checkAll.value) {
      this.register.patchValue(true);
      this.marketing.patchValue(true);
    } else {
      this.register.patchValue(false);
      this.marketing.patchValue(false);
    }

  }



}

