import { TestBed, inject } from '@angular/core/testing';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
    });
  });

  it('Serice should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
