import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LeaveHistoryComponent } from 'src/app/leave-history/leave-history.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from 'src/app/employee.service';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const leavehis = {
  getHis(empid) {
    console.log('came inside the stub');
    const history =  [
      {
        "leaveId": 3,
        "empId": 10,
        "leaveSdate": "2019-11-11",
        "leaveEdate": "2019-11-11",
        "leaveNdays": 1,
        "leaveType": "ML",
        "leaveStatus": "REJECTED",
        "leaveReason": "SICK",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": "good"
      },
      {
        "leaveId": 5,
        "empId": 10,
        "leaveSdate": "2018-12-31",
        "leaveEdate": "2018-12-31",
        "leaveNdays": 1,
        "leaveType": "EL",
        "leaveStatus": "PENDING",
        "leaveReason": "sick",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": "Congrats"
      },{
        "leaveId": 7,
        "empId": 1000,
        "leaveSdate": "2019-11-11",
        "leaveEdate": "2019-11-11",
        "leaveNdays": 1,
        "leaveType": "ML",
        "leaveStatus": "REJECTED",
        "leaveReason": "SIKCL",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": "dsfds"
      },
      {
        "leaveId": 9,
        "empId": 10,
        "leaveSdate": "2018-12-31",
        "leaveEdate": "2018-12-31",
        "leaveNdays": 1,
        "leaveType": "EL",
        "leaveStatus": "PENDING",
        "leaveReason": "sick",
        "leaveAppliedOn": "2018-12-05",
        "leaveManagerComm": "Congrats"
      },

    ];
    return of( history );
  }
};



describe('LeaveHisComponent', () => {
  let component: LeaveHistoryComponent;
  let fixture: ComponentFixture<LeaveHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ LeaveHistoryComponent ],
      providers: [{provide: LeavedetailsService, 
        useValue: leavehis},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Check Id for employee', () => {
    const fixture = TestBed.createComponent(LeaveHistoryComponent);
    const app = fixture.debugElement.componentInstance;
   // console.log("leave his"+app.mockhis[0]);
    expect(app.mockhis[0].empId).toEqual(10);



  });

  it('should Check leave Id', () => {
    const fixture = TestBed.createComponent(LeaveHistoryComponent);
    const app = fixture.debugElement.componentInstance;
   // console.log("leave his"+app.mockhis[0]);
    expect(app.mockhis[0].leaveId).toEqual(3);
});


it('should Check start date of leave', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveSdate).toEqual("2019-11-11");
});

it('should Check end date of leave', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveEdate).toEqual("2019-11-11");
});


it('should Check no of leave days', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveNdays).toEqual(1);
});
it('should Check leave status', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveStatus).toEqual("REJECTED");
});
it('should Check leave reason', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveReason).toEqual("SICK");
});

it('should Check leave type', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveType).toEqual("ML");
});

it('should Check leave reason', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveReason).toEqual("SICK");
});

it('should Check mangaer comment', () => {
  const fixture = TestBed.createComponent(LeaveHistoryComponent);
  const app = fixture.debugElement.componentInstance;
 // console.log("leave his"+app.mockhis[0]);
  expect(app.mockhis[0].leaveManagerComm).toEqual("good");
});



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
