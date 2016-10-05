import {Component, OnInit, OnDestroy, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {validateCheckBox} from '../../shared/validators/checkbox.validator';
import {validateEmail} from '../../shared/validators/email.validator';
import {validatePhone} from '../../shared/validators/phone.validator';
import {Router, ActivatedRoute} from '@angular/router';
import {EventsService} from '../../shared/services/events.service';
import { Subscription, Observable } from 'rxjs';
import {LoaderService} from '../../shared/services/loader.service';

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

  public eventId: string;

  public isCollapsedRegister:boolean = false;
  public isCollapsedMarketing:boolean = false;

  public register: FormControl = new FormControl(false, validateCheckBox);
  public checkAll: FormControl = new FormControl(false);
  public marketing: FormControl = new FormControl(false);

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _eventsService: EventsService,
    private _route: ActivatedRoute,
    private _loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
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

    this.subscription = this._route.params.subscribe((param: Object) => {
      this.eventId = param['eventId'];
      console.log(param);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitForm() {
    this.formSubmitted = true;
    this._eventsService.getEventById(this.eventId)
      .subscribe((result: any) => { console.log(result); });
    //console.log(this._eventsService.getEventById(''));
    //this._router.navigate(['registration', 123]);
    this._loaderService.contentIsLoading$.next(true);
    setTimeout(() => { this._loaderService.contentIsLoading$.next(false); }, 2000)
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

