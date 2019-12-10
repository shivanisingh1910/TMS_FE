import { Component, OnInit } from '@angular/core';
import { Tkt_status, Statuslog } from './ticketdetails.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from './ticketdetails.service';
import { FeedbackResolver } from '../feedback/feedback.model';

@Component({
  selector: 'app-newticketdetails',
  templateUrl: './newticketdetails.component.html',
  styleUrls: ['./newticketdetails.component.css']
})
export class NewticketdetailsComponent implements OnInit {
  empId:string;
  ticket:Tkt_status=new Tkt_status();
  logs:Statuslog[];
  genAttributes:string[];
  statusAttributes:string[];
  feedbackmodelobj:FeedbackResolver;
  rating:number;
  feedback:string;
  show:any

  constructor(public route:ActivatedRoute,public statusServiceObj:StatusService, private router:Router) { }
  invis:boolean=false;
  Closed()
  {
    this.invis=true;
    console.log(this.invis)
    
  }

  Submit()
  {
    this.feedbackmodelobj = new FeedbackResolver();
    this.feedbackmodelobj.empId = this.route.snapshot.paramMap.get("eid");
    this.feedbackmodelobj.tid = this.ticket.tid;
    this.feedbackmodelobj.close = true;
    this.feedbackmodelobj.rating = this.rating;
    this.feedbackmodelobj.feedback = this.feedback;
    console.log(this.feedbackmodelobj);
    var data=this.statusServiceObj.postfeedback(this.feedbackmodelobj).subscribe((data)=>{
      console.log("ok");
      console.log(data.value);
      this.show=data.value;
      console.log(this.show);
      })
  }

  ngOnInit() {
    this.show = {};
    this.show.message = "";
    this.empId = this.route.snapshot.paramMap.get("eid");
    console.log(this.empId);
    this.logs = [];
    this.route.params.subscribe(
      s=>{var o = this.statusServiceObj.getAllSatusbyTid(s.tid);
        o.subscribe(response=>{
         console.log(response.value.data);  
          this.ticket = response.value.data;  
          console.log(this.ticket); 
          this.logs=this.ticket.logs;
          console.log("log"+this.ticket.logs[0].status); 
          console.log(this.logs);
        });
      })
    this.genAttributes = this.statusServiceObj.getAllGeneralAttributes();
    this.statusAttributes = this.statusServiceObj.getAllStatusAttriutes();
    }
}


