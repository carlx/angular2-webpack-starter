import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventsService} from '../../shared/services/events.service';
import {LoaderService} from '../../shared/services/loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'event-info',
  templateUrl: 'event-info.component.html',
})

export class EventInfoComponent implements OnInit {

  event: Object;
  isRunning: Observable<boolean>;

  constructor(
    private _eventsService: EventsService,
    private _route: ActivatedRoute,
    private _loaderService: LoaderService
  ) {

  }

  ngOnInit() {
    this.isRunning = this._loaderService.contentIsLoading$;
    this._loaderService.contentIsLoading$.next(true);
    this._route.params.flatMap((param: any) => {
      return this._eventsService.getEventById(param.eventId)
    }).subscribe((result: Object) => {
      setTimeout(() => {
        this._loaderService.contentIsLoading$.next(false);
      }, 4000);
      console.log(result);
      this._loaderService.contentIsLoading$.next(false);
      this.event = result;
    }, (error: any) => {
      this._loaderService.contentIsLoading$.next(false);
    });


  }

}

