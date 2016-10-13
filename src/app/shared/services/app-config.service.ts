import { Injectable, Inject } from '@angular/core';


@Injectable()
export class AppConfigService {

  hostname: string;

  constructor(
    @Inject('Environment') private _env: string
  ) {
    switch(_env) {
      case 'development':
        this.hostname = 'https://flyevents.herokuapp.com';
        break;
      default:
        this.hostname = 'https://flyevents.herokuapp.com';
        break;
    }
  }

 getHostName() {
   return this.hostname;
 }



}
