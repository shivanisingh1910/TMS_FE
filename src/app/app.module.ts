import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';
import { StatusticketsComponent } from './statustickets/statustickets.component';
import { TicketServicenew } from './ticket/ticket.servicenew';
// import { TicketService } from './ticketservice.service';
import { EmployeeComponent } from './employee/employee.component';
import { AllticketsService } from './alltickets.service';
import { EmployeeticketsComponent } from './employeetickets/employeetickets.component';
import { NewticketdetailsComponent } from './newticketdetails/newticketdetails.component';
import { FeedbackComponent } from './feedback/feedback.component';



const routes:Routes=[
{path:'admin',component:AdminComponent,children:[
{path:'statustickets',component:StatusticketsComponent},
{path:'ticket',component: TicketComponent}]},
{path:'employee',component:EmployeeComponent,
  children:[
    {path:'ticket',component: TicketComponent},
    {path:'employeetickets',component:EmployeeticketsComponent},
    {path:'employeetickets/details/:eid/:tid',component:NewticketdetailsComponent}
    
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    AdminComponent,
    StatusticketsComponent,
    EmployeeComponent,
    EmployeeticketsComponent,
    NewticketdetailsComponent,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),RouterModule.forChild(routes),HttpClientModule  ],
  providers: [AllticketsService],
  bootstrap: [AppComponent]
})
export class AppModule {}