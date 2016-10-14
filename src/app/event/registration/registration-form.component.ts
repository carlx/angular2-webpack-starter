import { Component, OnInit, OnDestroy, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateCheckBox } from '../../shared/validators/checkbox.validator';
import { validateEmail } from '../../shared/validators/email.validator';
import { validatePhone } from '../../shared/validators/phone.validator';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../shared/services/loader.service';
import { RegistrationService } from '../../shared/services/registration.service';

@Component({
  selector: 'registration-form',
  templateUrl: 'registration-form.component.html',
  styles: [
    require('./registration-form.css')
  ]
})

export class RegistrationFormComponent implements OnInit, OnDestroy, OnChanges {

  @Input() event: Object;
  registerForm: FormGroup;
  formSubmitted: boolean = false;
  subscription: Subscription;


  public isCollapsedRegister:boolean = true;
  public isCollapsedMarketing:boolean = true;
  public register: FormControl = new FormControl(false, validateCheckBox);
  public checkAll: FormControl = new FormControl(false);
  public marketing: FormControl = new FormControl(false);
  public eventId: FormControl = new FormControl(null, Validators.required);

  constructor(
    private _formBuilder: FormBuilder,
    private _registrationService: RegistrationService,
    private _loaderService: LoaderService,
    @Inject('windowRef') private _windowRef: any,
    @Inject('Environment') private _env: string
  ) {}

  ngOnInit() {
    console.log('Running in %s', this._env);
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

    this.checkAll.valueChanges.subscribe(checkAllValue => {
      if(checkAllValue) {
        this.register.patchValue(true);
        this.marketing.patchValue(true);
      } else {
        this.register.patchValue(false);
        this.marketing.patchValue(false);
      }
    });

  }

  ngOnDestroy() {
    if(this.subscription)
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

  ngOnChanges(changes: SimpleChanges) {
    if(changes['event'] && changes['event'].currentValue) {
      this.eventId.patchValue(changes['event'].currentValue['_id']);
    }
  }


}

