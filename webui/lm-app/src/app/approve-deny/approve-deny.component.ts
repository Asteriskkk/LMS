import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LeaveDetails } from 'src/app/leave-details';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
  empData : Observable<Employee>;
  leaveData : Observable<LeaveDetails>;
  empId : number;
  leaveId:number;
  mgrId : number;
  msg : String;
  constructor(public applyLeaveService:LeavedetailsService,public empservice:EmployeeService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("lempId"));
    this.empData=empservice.getEmp(this.empId);

    this.leaveId=parseInt(localStorage.getItem("leaveId"));
    this.leaveData=applyLeaveService.getLeave(this.leaveId);
   }
  ld = new LeaveDetails(); 
  ed = new Employee(); 
  isValidFormSubmitted = false;
  approve() {
    this.ld.leaveId=parseInt(localStorage.getItem("leaveId")); 
    this.ld.leaveStatus="APPROVED"; 
    this.mgrId=parseInt(localStorage.getItem("empId"));
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId); 
    this.applyLeaveService.approveDeny(this.ld,this.mgrId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
  }
  reject(form: NgForm) {
    this.isValidFormSubmitted=false;
    if(form.invalid){
     return; 
    }
    this.ld.leaveId=parseInt(localStorage.getItem("leaveId")); 
    this.ld.leaveStatus="REJECTED"; 
    this.mgrId=parseInt(localStorage.getItem("empId"));
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId); 
    this.applyLeaveService.approveDeny(this.ld,this.mgrId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
    setTimeout(() => {
      this.router.navigate(['/leavedetails'])
    }
    , 3000);
  }
  cancel(){
    this.router.navigate(["/leavedetails"]);
  }

  ngOnInit() {
  }

}
