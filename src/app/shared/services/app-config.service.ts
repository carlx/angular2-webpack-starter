import { Injectable, Inject } from '@angular/core';


@Injectable()
export class AppConfigService {

  hostname: string;

  constructor(
    @Inject('Environment') private _env: string
  ) {
    switch(_env) {
      case 'development':
        this.hostname = 'http://tickets.flymore.com.pl';
        break;
      default:
        this.hostname = 'https://tickets.flymore.com.pl';
        break;
    }
  }

 getHostName() {
   return this.hostname;
 }



}
