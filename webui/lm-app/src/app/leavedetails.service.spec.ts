import { TestBed, inject } from '@angular/core/testing';
import { LeavedetailsService } from './leavedetails.service';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';

describe('LeavedetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavedetailsService],
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
    });
  });

  it('Serice should be created', inject([LeavedetailsService], (service: LeavedetailsService) => {
    expect(service).toBeTruthy();
  }));
});
