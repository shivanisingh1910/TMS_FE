import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Tkt_status } from './ticketdetails.model';
import { FeedbackResolver } from '../feedback/feedback.model';


@Injectable({
  providedIn: 'root'
})
export class StatusService {
  allStatus:Tkt_status[];
  gen_attributes:string[]=['tid','title','description','category','subCategory','empName','escalation','feedback'];
  sts_attributes:string[]=['status','entryTime','notes'];

  feedbackdata:FeedbackResolver[]=[];
  responce:any

  constructor(public httpClientObj:HttpClient) { }

  getAllSatusbyTid(tid:string)
  {
    return this.httpClientObj.get<any>('http://localhost:51640/api/ticket/status/'+tid);
  }
  getAllGeneralAttributes():string[]
  {
    return this.gen_attributes;
  }
  getAllStatusAttriutes():string[]
  {
    return this.sts_attributes;
  }

  postfeedback(feedbackobj:FeedbackResolver): any
   {
     
      console.log(feedbackobj);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.httpClientObj.post<FeedbackResolver>('http://localhost:51640/api/ticket/close',  
      feedbackobj, httpOptions);
      // .subscribe((data)=>{
      //    console.log(data)
      //    return data
      //    //  this.responce=data;
         
      //    }); 
      
         

   }
}