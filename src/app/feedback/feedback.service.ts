import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FeedbackResolver } from './feedback.model';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbackdata:FeedbackResolver[]=[];
  responce:any

  constructor(public httpClientObj:HttpClient) { }

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
