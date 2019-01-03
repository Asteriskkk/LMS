import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-mgr-details',
  templateUrl: './mgr-details.component.html',
  styleUrls: ['./mgr-details.component.css']
})
export class MgrDetailsComponent implements OnInit {

  mgr : Observable<Employee>;
  empid : number;
  mmock:Employee;
   constructor(private userService: EmployeeService) { 
      this.empid=parseInt(localStorage.getItem("mgrId"));
      this.mgr = userService.getEmp(this.empid);
      this.mgr.subscribe(res => this.mmock=res);
   }

  ngOnInit() {
  }

}
