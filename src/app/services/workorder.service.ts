import { Injectable } from '@angular/core';
import { Workorder } from '../models/Workorder';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable,BehaviorSubject } from 'rxjs';
import { Machine } from '../models/Machine';
import { Product } from '../models/Product';
const httpOtions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class WorkorderService {

  workOrders:Workorder[]=[
    { due:new Date(),
      id:101,
      status:'On Hold',
      title:'Test Work Order 1',
      priority:'LOW',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      id:102,
      status:'On Progress',
      title:'Test Work Order 2',
      priority:'MEDIUM',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      id:103,
      status:'On Hold',
      title:'Test Work Order 3',
      priority:'HIGH',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      id:104,
      status:'On Hold',
      title:'Test Work Order 4',
      priority:'LOW',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      id:105,
      status:'On Progress',
      title:'Test Work Order 5',
      priority:'MEDIUM',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      id:106,
      status:'On Hold',
      title:'Test Work Order 3',
      priority:'HIGH',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    }
  ];
  API_URL = 'http://localhost:7071/workorder';
  API_MAIN_URL = 'http://localhost:7071/mainmachine';
  API_NOTI_URL= 'http://localhost:7071/notification';
  API_PROD_URL='http://localhost:9097/prod';  
  constructor(
    private http:HttpClient
  ) { }

  
  // Get Work Order
  getWorkOrder():Observable<Workorder[]>{
    console.log('Work Order HTTP CALL');
    return this.http.get<Workorder[]>(this.API_URL);
  }
    
  getMachine():Observable<Machine[]>{
    console.log(' Machine HTTP CALL');
    return this.http.get<Machine[]>(this.API_MAIN_URL);
  }
  getProduct():Observable<Product[]>{
    console.log(' Machine HTTP CALL');
    return this.http.get<Product[]>(this.API_PROD_URL);
  }

    // getWorkOrder(){
    //   return this.workOrders;
    // }

  getNotification():Observable<string[]>{
    return this.http.get<string[]>(this.API_NOTI_URL);
  }
  
  addWorkOrder(work:Workorder):Observable<Workorder>{
    return this.http.post<Workorder>(this.API_URL,work,httpOtions);
  }
  deleteWorkOrder(work:Workorder){
    const url = `${this.API_URL}/${work.id}}`;
    return this.http.delete<Workorder>(url,httpOtions);
  }
}
