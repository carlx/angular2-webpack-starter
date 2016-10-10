import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../shared/services/events.service';
import { LoaderService } from '../../shared/services/loader.service';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';


@Component({
  selector: 'event-info',
  templateUrl: 'event-info.component.html',
  styles: [require('./event-info.css')]
})

export class EventInfoComponent implements OnInit, OnChanges {

  isRunning: Observable<boolean>;
  @Input() event: Object;

  constructor(
    private _eventsService: EventsService,
    private _route: ActivatedRoute,
    private _loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    moment.locale('pl');
    this.isRunning = this._loaderService.contentIsLoading$;
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['event'] && changes['event'].currentValue) {
      changes['event'].currentValue['date'] = moment(changes['event'].currentValue['date']);
    }
  }

}

