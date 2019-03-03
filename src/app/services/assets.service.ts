import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Machine } from '../models/Machine';
import { Observable } from 'rxjs';
import { Compo } from '../models/Compo';
import { Subcompo } from '../models/Subcompo';
const httpOtions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  API_MACHINE_URL = 'http://localhost:8084/assets';
  API_COMPONENTS_URL = '';
  API_SUBCOMPONTS_URL = '';
  
  constructor(
    private http:HttpClient
  ) { }

  
  //Get Work Order
  getMachine():Observable<Machine[]>{
    console.log('Assets HTTP CALL');
    return this.http.get<Machine[]>(this.API_MACHINE_URL);
  }
  getComponets():Observable<Compo[]>{
    console.log('Assets HTTP CALL');
    return this.http.get<Compo[]>(this.API_COMPONENTS_URL);
  }
  getSubComponents():Observable<Subcompo[]>{
    console.log('Assets HTTP CALL');
    return this.http.get<Subcompo[]>(this.API_SUBCOMPONTS_URL);
  }

  // getWorkOrder(){
  //   return this.workOrders;
  // }

  // addWorkOrder(work:Workorder):Observable<Workorder>{
  //   return this.http.post<Workorder>(this.API_URL,work,httpOtions);
  // }
  // deleteWorkOrder(work:Workorder){
  //   const url = `${this.API_URL}/${work.id}}`;
  //   return this.http.delete<Workorder>(url,httpOtions);
  // }
}
