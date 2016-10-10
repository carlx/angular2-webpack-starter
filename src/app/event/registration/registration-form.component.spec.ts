import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  RouterTestingModule
} from '@angular/router/testing';

import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import {APP_BASE_HREF} from '@angular/common';

import {RegistrationFormComponent} from './registration-form.component';
import {ComponentFixture} from '@angular/core/testing/component_fixture';
import {AppModule} from '../../app.module';



let comp:    RegistrationFormComponent;
let fixture: ComponentFixture<RegistrationFormComponent>;

describe('register form component test', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
  });
    fixture = TestBed.createComponent(RegistrationFormComponent);
    comp = fixture.componentInstance;

  });

  it('register component html should contain event-info', (done) => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.container'));
    expect(de.nativeElement.innerHTML).toContain('event-info');
    done();
  })

})
