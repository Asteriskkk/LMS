
import { MgrDetailsComponent } from './mgr-details.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';





const mangaerdetails = {
  getEmp(empid) {
    console.log('came inside the manager stub');
    const details =  
      {
        "empId": 4,
        "empFullName": "rahul",
        "emailId": "rahul@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":2,
      }

    return of( details );
  }
};


describe('ManagerShowComponent', () => {
  let component: MgrDetailsComponent;
  let fixture: ComponentFixture<MgrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ MgrDetailsComponent ], 
      providers: [{provide: EmployeeService, 
        useValue: mangaerdetails},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Check Name for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
  console.log("manager name"+app.mmock.empFullName);
    expect(app.mmock.empFullName).toEqual('rahul');
  
  });
  it('should Check Name for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
  
    expect(app.mmock.empId).toEqual(4);

  });
  it('should Check mobNo for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mmock.mobNumber).toEqual('56233444');
 
  });


  it('should Check emailId for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mmock.emailId).toEqual('rahul@gmail.com');
 
  });


  it('should Check dateOfJoining for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mmock.dateOfJoining).toEqual('2018-12-12');
  
  });

  it('should Check department for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
   
    expect(app.mmock.department).toEqual('DOTNET');
  
  });
  

  it('should Check availableLeave for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;
  
    expect(app.mmock.availableLeave).toEqual(12);
  
  });

  it('should Check managerId for rahul', () => {
    const fixture = TestBed.createComponent(MgrDetailsComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.mmock.mgrId).toEqual(2);
  
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



















