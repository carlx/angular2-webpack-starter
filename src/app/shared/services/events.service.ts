import { Injectable, Inject } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';


@Injectable()
export class EventsService {

  hostname: string;

  constructor(
    private _http: Http,
    private _toastr: ToasterService,
    @Inject('Environment') private _env: string
  ) {
    console.log(_env);
    switch(_env) {
      case 'development':
        this.hostname = 'http://localhost:3030';
        break;
      default:
        this.hostname = 'http://localhost:3030';
        break;
    }

  }

  public getEventById(eventId: string) {
    console.log(eventId);
    return this._http.get(`${this.hostname}/events/${eventId}`)
      .map((response: Response) => { return response.json(); })
      .catch((error) => this.handleError(error));
  }

  public handleError(error) {
    this._toastr.pop('error', 'Błąd', 'Wystąpił problem z odczytem danych z serwera!');
    return Observable.throw(error);
  }



}
