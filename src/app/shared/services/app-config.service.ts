import { Injectable, Inject } from '@angular/core';


@Injectable()
export class AppConfigService {

  hostname: string;

  constructor(
    @Inject('ApiAddress') private _api: string
  ) {
    this.hostname = this._api;
  }

 getHostName() {
   return this.hostname;
 }



}
