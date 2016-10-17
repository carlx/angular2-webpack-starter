import { Injectable, Inject } from '@angular/core';


@Injectable()
export class AppConfigService {

  hostname: string;

  constructor(
    @Inject('Environment') private _env: string
  ) {
    switch(_env) {
      case 'development':
        this.hostname = 'http://localhost:3030';
        break;
      default:
        this.hostname = 'http://tickets-api.flymore.com.pl';
        break;
    }
  }

 getHostName() {
   return this.hostname;
 }



}
