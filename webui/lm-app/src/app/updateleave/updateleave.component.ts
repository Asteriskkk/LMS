import { Component, OnInit } from '@angular/core';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { Router } from '@angular/router';
import { LeaveDetails } from 'src/app/leave-details';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateleave',
  templateUrl: './updateleave.component.html',
  styleUrls: ['./updateleave.component.css']
})
export class UpdateleaveComponent implements OnInit {
  model=new LeaveDetails();
  message:string;
  msg:String;
  empId : number;
  isValidFormSubmitted = false;
  constructor(public applyLeaveService:LeavedetailsService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
    this.model.leaveId=parseInt(localStorage.getItem("editleaveId"));
    this.model.leaveSdate=localStorage.getItem("editleaveSdate");
    this.model.leaveEdate=localStorage.getItem("editleaveEdate");
    this.model.leaveType=localStorage.getItem("editleaveType");
    this.model.leaveReason=localStorage.getItem("editleaveReason");
    this.model.leaveNdays=parseInt(localStorage.getItem("editleaveNdays"));
    
   }

   calculateDays() {
    let date1: string=this.model.leaveSdate.toString();
    let date2: string=this.model.leaveEdate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.leaveNdays=diffInHours + 1;
  }

  updateleave(form: NgForm)
  {
    this.isValidFormSubmitted=false;
    if(form.invalid){
     return; 
  }  
    console.log ('end date component' + this.model.leaveEdate);
    this.applyLeaveService.updateLeave(this.model,this.empId).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
    this.isValidFormSubmitted = true;
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