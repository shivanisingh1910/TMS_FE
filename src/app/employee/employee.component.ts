import { Component, OnInit } from '@angular/core';
import { EmployeeTickets } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  eticketstatus:EmployeeTickets[]=[];

  constructor() { }

  ngOnInit() {
  }

}
