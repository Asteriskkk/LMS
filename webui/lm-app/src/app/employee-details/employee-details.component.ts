import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
 
  emp : Observable<Employee>;
  empid : number;
  emock:Employee;
   constructor(private userService: EmployeeService) { 
    this.empid=parseInt(localStorage.getItem("empId"));
    this.mockemp(this.empid);
      
   }

mockemp(empids)
{
  
  this.emp = this.userService.getEmp(this.empid);
  this.userService.getEmp(empids).subscribe(res => this.emock=res);
  return this.emock;
}

  ngOnInit() {
  }

}
