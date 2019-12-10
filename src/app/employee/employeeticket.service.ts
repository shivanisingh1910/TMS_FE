import { Injectable } from '@angular/core';
import {EmployeeTickets} from '../employee/employee.model'
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  employeeticketobj:EmployeeTickets[]=[];

  constructor(public httpClientObj:HttpClient) { }

  getAllTicket(ticket:string){
    //using a promise
    return this.httpClientObj.get<EmployeeTickets[]>('http://localhost:51640/api/TICKET/get/emp/' + ticket).toPromise();
    }
}
