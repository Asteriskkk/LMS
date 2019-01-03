import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  model = new Login();
  constructor(private router : Router) {
    this.model.userName=localStorage.getItem("empId");
    //alert(this.model.userName);
   }
   Login() {
      if(this.model.password=="hexaware") {
      this.router.navigate(["/leavedetails"]);
      }
      else {
        alert("Invalid");
      }
     }
     cancel(){
      this.router.navigate(["/"]);
    }
  ngOnInit() {
  }

}
