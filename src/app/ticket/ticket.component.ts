import { Component, OnInit, Input } from '@angular/core';
import { ticket } from './ticket.model';
import { TicketServicenew } from './ticket.servicenew';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  dataSaved = false;  
  employeeForm: any; 
  //message:any;
  @Input('newTicket') TMS:ticket;
 newTicket:ticket;
 msg:Response;
 ticketraised:Response=new Response();
 
  ticketobj:any;
  


  constructor(public newObj:TicketServicenew
    // , public route:Router
    ) { }
  addATicket(theForm)
    {
       
      this.newTicket=new ticket();
      console.log("ok");
       //form reset
       theForm.reset();

     }
  //  AddedTickets()
  //   {
  //     this.route.navigate(['/'])
  
  //   }

  // addToDB(){
  //   // console.log("after");
  //    //console.log(this.newTicket);
  //    var thePromise=this.newObj.postAllTickets();
  //    thePromise.then((response)=>{this.ticketobj=response;})}
  onFormSubmit(theForm) {  
    //this.dataSaved = false;  
    //const employee = this.employeeForm.value;  
    var p=this.newObj.postAllTickets(this.newTicket).subscribe((data)=>{
      console.log(data);
      //console.log(p);
      //console.log('value'+JSON.stringify(data.value));
      this.ticketraised=data.value;
      //console.log(this.ticketraised);
      theForm.reset();
    });  }
       
  

    // data.subscribe((data1)=>{
    //   console.log(data1)
    //   // return data

    //   //  this.responce=data;
      
    //   }); 
    // data.subscribe((datafromdb)=>{console.log(datafromdb)})
    // console.log("from service")
    // console.log(data)
    // data.subscribe(function(response){
    // console.log('Recieved response');
    // console.log(response);
    // })
    
    //this.employeeForm.reset();  
  
  // onadd()
  // {
  //   var data=this.newObj.postAllTickets(this.newTicket).subscribe((data)=>{
  //     console.log(data);
  //   });  

 // }
    
  
  

  ngOnInit() {this.newTicket =new ticket();
    this.msg=new Response();
    //console.log("before");
    //console.log(this.newTicket);
      
        //console.log(response);
      // this.newObj.postsFromSerivice=response;
    }}
     // (err)=>console.log(err));
  

  