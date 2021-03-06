import { Injectable, Inject } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import {AppConfigService} from './app-config.service';


@Injectable()
export class EventsService {

  constructor(
    private _http: Http,
    private _toastr: ToasterService,
    private _appConfig: AppConfigService
  ) {

  }

  public getEventById(eventId: string) {
    console.log(eventId);
    return this._http.get(`${this._appConfig.getHostName()}/events/${eventId}`)
      .map((response: Response) => { return response.json(); })
      .catch((error) => this.handleError(error));
  }

  public handleError(error) {
    this._toastr.pop('error', 'Błąd', 'Wystąpił problem z odczytem danych z serwera!');
    return Observable.throw(error);
  }



}
