// App tests
import { inject, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpModule, Response } from '@angular/http';
import { EventsService } from './events.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

//TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('Http', () => {

  let serv: EventsService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        EventsService,
        ToasterService
      ],
    });
  });

  beforeEach(inject([EventsService], (testService: EventsService) => {
    serv = testService;
  }));

  it('should contain response object', (done) => {
    serv.getEventById('')
      .subscribe((result: any) => {
        expect(typeof result).toBe('object');
        done();
      });
  });

})
