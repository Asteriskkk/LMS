import { EmployeeComponent } from './employee.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from 'src/app/employee';
import { GrdFilterPipe } from 'src/app/grdfilter.pipe';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const userServiceStub = {
  
  getEmps() {
    console.log('came inside the employee stub');
    const emps =  [
      {
        "empId": 1,
        "empFullName": "Piyush",
        "emailId": "piyush@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":0,
      },
      {
        "empId": 2,
        "empFullName": "Rahul",
        "emailId": "rahul.hexa@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":0,
      },

    ];
    return of( emps );
  }
};


describe('EmployComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let emp : Employee[];
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ EmployeeComponent, GrdFilterPipe ],
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub},
        HttpClient,
        HttpClientTestingModule],
        schemas : [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create Employee', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mock()).toBe(app.x);
    
  //  expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
