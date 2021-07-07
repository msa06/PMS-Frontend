import { Injectable } from '@angular/core';
import { Workorder } from '../models/Workorder';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable,BehaviorSubject } from 'rxjs';
import { Inventory } from '../models/Inventory';
const httpOtions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class InventoryService {

  API_URL = 'http://localhost:9002/inventory';
  
  constructor(
    private http:HttpClient
  ) { }

  
  //Get Work Order
  getInventory():Observable<Inventory[]>{
    console.log('Inventory HTTP CALL');
    return this.http.get<Inventory[]>(this.API_URL);
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
