import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
import { LeaveDetails } from 'src/app/leave-details';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  //leaveedit :number;
  arrlength:LeaveDetails[]=[];
  mockhis:LeaveDetails[]=[];
  history : Observable<LeaveDetails[]>;
  empid:number;
  showButton:boolean=false;
   constructor(private userService: LeavedetailsService, private router : Router) { 
    this.empid=parseInt(localStorage.getItem("empId"));
      this.history = userService.getHis(this.empid);
      this.userService.getHis(this.empid).subscribe(c => this.mockhis = c);
      //console.log(this.arrlength[0].length);
   }


   clickRow(x) {

    localStorage.setItem("editleaveId",x.leaveId);
    localStorage.setItem("editleaveSdate",x.leaveSdate);
    localStorage.setItem("editleaveEdate",x.leaveEdate);
    localStorage.setItem("editleaveType",x.leaveType);
    localStorage.setItem("editleaveReason",x.leaveReason);
    localStorage.setItem("editleaveNdays",x.leaveNdays);
    this.router.navigate(['/updateleave']);
  }

  ngOnInit() {
    this.userService.getHis(this.empid).subscribe(c => this.arrlength = c);
    console.log("length of array "+this.arrlength);    
  }

}
