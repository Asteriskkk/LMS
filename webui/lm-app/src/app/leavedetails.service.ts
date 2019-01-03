import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Employee } from "./employee";
import { LeaveDetails } from 'src/app/leave-details';

@Injectable({
  providedIn: 'root'
})
export class LeavedetailsService {

  constructor(private http: Http) {
  }
 applyLeave(leavedetails:LeaveDetails,empid : number):Observable<String>{
  return this.http.post('http://localhost:8080/ftp86/api/employees/applyleave/' +empid,leavedetails)
   .map(response=>response.text()) 
 }

 updateLeave(leavedetails:LeaveDetails,empid : number):Observable<String>{
  return this.http.post('http://localhost:8080/ftp86/api/employees/updateleave/' +empid,leavedetails)
   .map(response=>response.text()) 
 }


 approveDeny(leavedetails:LeaveDetails,empid : number):Observable<String>{
  return this.http.post('http://localhost:8080/ftp86/api/employees/approvedeny/' +empid,leavedetails)
   .map(response=>response.text()) 
 }

 getPending(empid): Observable<LeaveDetails[]> {
  return this.http.get
  ("http://localhost:8080/ftp86/api/employees/leavedetails/pending/" +empid)
     .map((res: Response) => res.json())
.catch((error: any) =>
Observable.throw(error.json().error || 'Server error'));
}

getHis(empid): Observable<LeaveDetails[]> {
  return this.http.get
  ("http://localhost:8080/ftp86/api/employees/leavedetails/his/" +empid)
     .map((res: Response) => res.json())
.catch((error: any) =>
Observable.throw(error.json().error || 'Server error'));
}

getLeave(leaveId): Observable<LeaveDetails> {
  return this.http.get
  ("http://localhost:8080/ftp86/api/employees/leavedetails/leaveid/"+leaveId)
     .map((res: Response) => res.json())
.catch((error: any) =>
Observable.throw(error.json().error || 'Server error'));
}

}
