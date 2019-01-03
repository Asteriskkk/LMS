import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { Login } from 'src/app/login';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emp : Observable<Employee[]>;
  usr : Employee[];
  model = new Login();
  show(eid,mid,name) {
    localStorage.setItem("empId",eid);
    localStorage.setItem("mgrId",mid);
    localStorage.setItem("name",name);
    this.model.userName=localStorage.getItem("empId");
    //this.router.navigate(["/login"]);
  }
  public searchText : string;
  public Data : any;
  public x : Employee[]=[];
   constructor(private userService: EmployeeService, private router : Router) {
      this.mock();
   }



   Login() {
    if(this.model.password=="h") {
    this.router.navigate(["/leavedetails"]);
    }
    else {
      alert("Invalid");
    }
   }
   cancel(){
    this.router.navigate(["/"]);
  }

  mock ()
  {
    this.emp = this.userService.getEmps();
    this.userService.getEmps().subscribe(c => this.x = c);
    return this.x;
  }

  ngOnInit() {
    
  }

}
