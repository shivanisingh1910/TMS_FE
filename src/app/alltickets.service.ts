import { Injectable } from '@angular/core';
import{StatusTicket} from './statustickets/statusticket.model'
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AllticketsService {
  postsFromSerivice:StatusTicket[]=[];

  constructor(public httpClientObj:HttpClient) { }

  getAllPosts(){
    //using a promise
    return this.httpClientObj.get<StatusTicket[]>('http://localhost:51640/api/admin').toPromise();
    


}
}
