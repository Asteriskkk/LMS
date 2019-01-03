import { TestBed, async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from './app.component';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule} from '@angular/http'; 
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LeavedetailsService } from 'src/app/leavedetails.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [EmployeeService,LeavedetailsService,
        HttpModule,
        Http,
        HttpClientTestingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Hello'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hexaware');
  }));

});
