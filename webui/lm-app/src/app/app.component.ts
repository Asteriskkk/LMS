import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmployeeService ]
})
  export class AppComponent {
    title = 'Hexaware';
    name ="Piyush";
    topic = "Angular";
  }

