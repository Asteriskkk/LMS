import { PendingLeavesComponent } from './pending-leaves.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



const penhis = { 
  getEmps() {
    console.log('came inside the stub pending');
    const users =  [
      {
        "empId": 3,
        "empFullName": "Piyush",
        "emailId": "piyush@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":0,
      },
      {
        "empId": 4,
        "empFullName": "Richa",
        "emailId": "prassucp@gmail.com",
        "mobNumber": "56233444",
        "dateOfJoining": "2018-12-12",
        "department": "DOTNET",
        "availableLeave":12,
        "mgrId":0,
      },

    ];
    return of( users );
  },
  getPending(empid) {
    console.log('came inside the pending stub');
    const pendingHis =  [
      {
        "leaveId": 10,
        "empId": 3,
        "leaveSdate": "2019-11-11",
        "leaveEdate": "2019-11-11",
        "leaveNdays": 1,
        "leaveType": "ML",
        "leaveStatus": "PENDING",
        "leaveReason": "SICK",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": null
      },
      {
        "leaveId": 5,
        "empId": 4,
        "leaveSdate": "2018-12-31",
        "leaveEdate": "2018-12-31",
        "leaveNdays": 1,
        "leaveType": "EL",
        "leaveStatus": "PENDING",
        "leaveReason": "sick",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": null
      },{
        "leaveId": 7,
        "empId": 3,
        "leaveSdate": "2019-11-11",
        "leaveEdate": "2019-11-11",
        "leaveNdays": 1,
        "leaveType": "ML",
        "leaveStatus": "PENDING",
        "leaveReason": "SIKCL",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": null
      },
      {
        "leaveId": 9,
        "empId": 3,
        "leaveSdate": "2018-12-31",
        "leaveEdate": "2018-12-31",
        "leaveNdays": 1,
        "leaveType": "EL",
        "leaveStatus": "PENDING",
        "leaveReason": "sick",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": null
      }

    ];
    return of( pendingHis );
  }
};



describe('PendingComponent', () => {
  let component: PendingLeavesComponent;
  let fixture: ComponentFixture<PendingLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ PendingLeavesComponent ],
      providers: [{provide: LeavedetailsService, 
        useValue: penhis},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should Check Id for employees', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].empId).toEqual(3);
  // });

  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveId).toEqual(10);


  // });

  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveSdate).toEqual("2019-11-11");


  // });
  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveEdate).toEqual("2019-11-11");


  // });

  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveNdays).toEqual(1);


  // });


  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveType).toEqual("ML");
  // });

  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveStatus).toEqual("PENDING");
  // });
  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveReason).toEqual("SICK");
  // });

  // it('should Check Id for employee', () => {
  //   const fixture = TestBed.createComponent(PendingLeavesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //  console.log("pending his"+app.mockpending[0].leaveId);
  //   expect(app.mockpending[0].leaveManagerComm).toEqual(null);
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
