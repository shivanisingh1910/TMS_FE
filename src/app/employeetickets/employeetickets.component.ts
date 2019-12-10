import { Component, OnInit } from '@angular/core';
import { EmployeeTickets } from '../employee/employee.model';
import { TicketService } from '../employee/employeeticket.service';

@Component({
  selector: 'app-employeetickets',
  templateUrl: './employeetickets.component.html',
  styleUrls: ['./employeetickets.component.css']
})
export class EmployeeticketsComponent implements OnInit {

  employeeid:string;
  invis:boolean=false;
  statusticketobj: EmployeeTickets[]=[]
  constructor(public ticketserviceobj:TicketService) { }
  Show()
  {
    this.invis=true;
    var thePromise=this.ticketserviceobj. getAllTicket(this.employeeid);
    thePromise.then((response)=>{this.statusticketobj=response["value"]["data"];
      console.log(response["value"]["data"]);
    this.ticketserviceobj.employeeticketobj=response["value"]["data"];},
    (err)=>console.log(err));
  }

  ngOnInit() {
    
  }

}
