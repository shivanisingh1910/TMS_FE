import { ticket } from "./ticket.model";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({providedIn:'root'})

export class TicketServicenew{
   
   
   allTickets:ticket[];
   responce:any;
   constructor(public httpClientObj:HttpClient) { }
   postAllTickets(ticketobj:ticket): any
   {
     
      console.log(ticketobj);
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.httpClientObj.post<ticket>('http://localhost:51640/api/ticket/raise',  
      ticketobj, httpOptions);
      // .subscribe((data)=>{
      //    console.log(data)
      //    return data
      //    //  this.responce=data;
         
      //    }); 
      
         

   }

   // postAllTickets(){
   //  //using a promise
   //  return this.httpClientObj.post('http://localhost:51640/api/ticket/raise',this.allTickets).toPromise();
   //  }

   //  createEmployee(employee: Employee): Observable<Employee> {  
   //  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
   //  return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
   //  employee, httpOptions);  
  //}  
}

    
    