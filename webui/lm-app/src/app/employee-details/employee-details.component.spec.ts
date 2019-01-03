import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const userServiceStub = {
  getEmp(empid) {
    console.log('came inside the stub');
    const usersdetails =  
      {
        "empId": 1,
        "empFullName": "piyush",
        "emailId": "piyush@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":0,
      }
    return of( usersdetails );
  }
};



describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ EmployeeDetailsComponent ], 
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create Employee', () => {
    const fixture = TestBed.createComponent(EmployeeDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mockemp(1)).toBe(app.emock);
    
  //  expect(component).toBeTruthy();
  });






  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
