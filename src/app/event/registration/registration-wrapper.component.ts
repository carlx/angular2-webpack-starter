import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/services/events.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'registration-wrapper',
  templateUrl: 'registration-wrapper.component.html',
  styles: []
})

export class RegistrationWrapperComponent implements OnInit {

  isRunning: Observable<boolean>;
  event: Object;

  isSuccessResponse: boolean = false;
  isFailureResponse: boolean = false;

  constructor(
    private _eventsService: EventsService,
    private _route: ActivatedRoute,
    private _loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.isRunning = this._loaderService.contentIsLoading$;
    this._loaderService.contentIsLoading$.next(true);

    this._route.url.subscribe((res: Array<Object>) => {
      let arr: Array<string> = res.filter(
        element => element['path'] === 'success' ||
        element['path'] === 'failure')
        .map(element => element['path']);
      if(arr.indexOf('success') >= 0) {
        this.isSuccessResponse = true;
      } else if(arr.indexOf('failure') >= 0) {
        this.isFailureResponse = true;
      }
    });

    this._route.params.flatMap((param: any) => {
      return this._eventsService.getEventById(param.eventId);
    }).subscribe((result: Object) => {
      this._loaderService.contentIsLoading$.next(false);
      this.event = result;
    }, (error: any) => {
      this._loaderService.contentIsLoading$.next(false);
    });
  }

}
