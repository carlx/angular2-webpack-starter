import { Injectable, Inject } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import {AppConfigService} from './app-config.service';
import {} from '../../../assets/mock-data/mock_event.json'


@Injectable()
export class EventsService {

  constructor(
    private _http: Http,
    private _toastr: ToasterService,
    private _appConfig: AppConfigService,
    @Inject('Environment') private _env: string
  ) {

  }

  public getEventById(eventId: string) {
    if(this._env === 'development') {
      return this._http.get('../../../assets/mock-data/mock-event.json')
        .map((response:Response) => {
          return response.json();
        })
        .catch((error) => this.handleError(error));
    }
    return this._http.get(`${this._appConfig.getHostName()}/events/${eventId}`)
      .map((response:Response) => {
        return response.json();
      })
      .catch((error) => this.handleError(error));
  }

  public handleError(error) {
    this._toastr.pop('error', 'Błąd', 'Wystąpił problem z odczytem danych z serwera!');
    return Observable.throw(error);
  }



}
