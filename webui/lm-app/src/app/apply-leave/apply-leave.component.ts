import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LeaveDetails } from 'src/app/leave-details';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {


  constructor(public applyLeaveService:LeavedetailsService, public router : Router) {
    this.empId=parseInt(localStorage.getItem("empId"));
    //alert(this.empId);
   }
  model=new LeaveDetails();
  message:string;
  msg:String;
  empId : number;
  isValidFormSubmitted = false;
  calculateDays() {
    let date1: string=this.model.leaveSdate.toString();
    let date2: string=this.model.leaveEdate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.leaveNdays=diffInHours + 1;
}

applyLeave(form: NgForm)
{
    this.isValidFormSubmitted=false;
    if(form.invalid){
     return; 
  }  
    console.log ('end date component' + this.model.leaveEdate);
    this.applyLeaveService.applyLeave(this.model,this.empId).subscribe(
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
    , 4000);
}

cancel(){
  this.router.navigate(["/leavedetails"]);
}
  ngOnInit() {
  }

}
