import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { PendingLeavesComponent } from './pending-leaves/pending-leaves.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MgrDetailsComponent } from './mgr-details/mgr-details.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EmployeeService } from 'src/app/employee.service';
import { LeavedetailsService } from 'src/app/leavedetails.service';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { GrdFilterPipe } from './grdfilter.pipe';
import { UpdateleaveComponent } from './updateleave/updateleave.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';



const appRoutes :Routes =[
  
    {path:'',component:EmployeeComponent},
    {path:'leavedetails',component:EmployeeDetailsComponent},
    //{path:'leavedetail',component:EmployeeDetailsComponent},
    {path:'applyleave',component:ApplyLeaveComponent},
    {path:'updateleave',component:UpdateleaveComponent},
    {path:'leavehis',component:LeaveHistoryComponent},
    {path:'pending',component:PendingLeavesComponent},
    {path:'approvedeny',component:ApproveDenyComponent},
    {path:'login',component:AuthenticationComponent},
  ]


@NgModule({
  declarations: [
    AppComponent,
    ApplyLeaveComponent,
    PendingLeavesComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    MgrDetailsComponent,
    ApproveDenyComponent,
    LeaveHistoryComponent,
    AuthenticationComponent,
    GrdFilterPipe,
    UpdateleaveComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,LeavedetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
