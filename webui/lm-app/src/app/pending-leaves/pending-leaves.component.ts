import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { Observable } from 'rxjs/internal/Observable';
import { LeaveDetails } from 'src/app/leave-details';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-pending-leaves',
  templateUrl: './pending-leaves.component.html',
  styleUrls: ['./pending-leaves.component.css']
})
export class PendingLeavesComponent implements OnInit {
  leaveArray : number[] = [];
  emps : Observable<Employee[]>;
  leavId : number;
  pending : Observable<LeaveDetails[]>;
  empid:number;
  lempid:number;
  flagp : number;
  showButton:boolean = false;
    myForm: FormGroup;
    id:string;
    indexs:number
    mgrId:number;
    ld = new LeaveDetails(); 
    ed = new Employee(); 
    msg : String;  
    buttonallshow:boolean=false;
    aempId:number;
    aleaveId:number;
    aempData : Observable<Employee>;
    aleaveData : Observable<LeaveDetails>;
    isValidFormSubmitted = false;
    mockpending:LeaveDetails[]=[];
   constructor(public applyLeaveService:LeavedetailsService,private fb: FormBuilder,private userService: EmployeeService,private pendingService: LeavedetailsService,private activatedRoute: ActivatedRoute, private router : Router) { 
    this.empid=parseInt(localStorage.getItem("empId"));
    this.emps=userService.getEmps();
      this.pending = userService.getPending(this.empid); 
      this.flagp=parseInt(localStorage.getItem("empId"));
      this.aempId=parseInt(localStorage.getItem("lempId"));
      this.aempData=userService.getEmp(this.aempId);
  
      this.aleaveId=parseInt(localStorage.getItem("leaveId"));
      this.aleaveData=applyLeaveService.getLeave(this.aleaveId);
      this.userService.getPending(this.empid).subscribe(c => this.mockpending = c);
   } 
   clickRow(x,e) {
     this.leavId=x.leaveId; 
     //alert(this.leavId);
     localStorage.setItem("leaveId",x.leaveId); 
     //alert(e.empId);
     localStorage.setItem("lempId",e.empId);
     this.showButton=true;
    //alert(localStorage.getItem("leaveId"));
   }
  //  cancel(){
  //   this.router.navigate(["/leavedetails"]);
  // }
  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }
  // doApproveDeny() { 
  //   this.router.navigate(["/approvedeny"]);
  // }
 
 onChange(leaveId: string, isChecked: boolean) {
      if(this.buttonallshow==true)
      {
        this.buttonallshow=false;
      }
      const emailFormArray = <FormArray>this.myForm.controls.useremail;
      if (isChecked) {
        this.buttonallshow=true;
        emailFormArray.push(new FormControl(leaveId));
        let checkindex = emailFormArray.controls.findIndex(x => x.value == leaveId)
        this.id=leaveId;
        this.leaveArray.push(parseInt(this.id));
      } 
      else {
        let index = emailFormArray.controls.findIndex(x => x.value == leaveId)
        emailFormArray.removeAt(index);
        console.log(this.leaveArray);
        delete this.leaveArray[index];
      }
    }

    allApprove()
    {

      this.mgrId=parseInt(localStorage.getItem("empId"));
      let i:number=0;
 while(i<this.leaveArray.length)
 { 
  this.ld.leaveStatus="APPROVED"; 
  this.ld.leaveId=this.leaveArray[i];
  this.ld.leaveManagerComm="Congrats";
  this.applyLeaveService.approveDeny(this.ld,this.mgrId).subscribe(
      success => {
          this.msg=success;
      },
      err => { 
          this.msg=err;
          console.log(err);
      }
  )
   i++;
 }
 setTimeout(() => {
  window.location.reload();
}, 2000); // Activate after 5 minutes.
}

approve() {
  this.ld.leaveId=parseInt(localStorage.getItem("leaveId")); 
  this.ld.leaveStatus="APPROVED"; 
  this.mgrId=parseInt(localStorage.getItem("empId"));
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
    window.location.reload();
  }, 1000); // Activate after 1 second.
}

reject(form: NgForm) {
  this.isValidFormSubmitted=false;
  if(form.invalid){
   return; 
  }
  this.ld.leaveId=parseInt(localStorage.getItem("leaveId")); 
  this.ld.leaveStatus="REJECTED"; 
  this.mgrId=parseInt(localStorage.getItem("empId"));
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
    window.location.reload();
  }, 1000);
}

}
