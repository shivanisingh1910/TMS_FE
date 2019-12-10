import { Component, OnInit } from '@angular/core';
// import{ TicketService } from '../ticketservice.service';
import { StatusTicket } from './statusticket.model';
import { AllticketsService } from '../alltickets.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-statustickets',
  templateUrl: './statustickets.component.html',
  styleUrls: ['./statustickets.component.css']
})
export class StatusticketsComponent implements OnInit {
  statusticketobj:StatusTicket[]=[];

  constructor(public ticketserviceobj:AllticketsService) {
 

   }

  ngOnInit() {
    var thePromise=this.ticketserviceobj.getAllPosts();
    thePromise.then((response)=>{this.statusticketobj=response;
      console.log(response);
    this.ticketserviceobj.postsFromSerivice=response;},
    (err)=>console.log(err));
  }

}
