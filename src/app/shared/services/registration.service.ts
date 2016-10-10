import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import {AppConfigService} from './app-config.service';


@Injectable()
export class RegistrationService {

  constructor(
    private _http: Http,
    private _toastr: ToasterService,
    private _appConfig: AppConfigService
  ) {

  }

  public registerToEvent(registerData: Object) {
    return this._http.post(`${this._appConfig.getHostName()}/registrations/`, registerData)
      .map((response: Response) => { return response.json(); })
      .catch((error) => this.handleError(error));
  }

  public handleError(error) {
    this._toastr.pop('error', 'Błąd', 'Wystąpił problem z odczytem danych z serwera!');
    return Observable.throw(error);
  }



}
