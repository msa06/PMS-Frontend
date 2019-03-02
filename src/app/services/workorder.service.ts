import { Injectable } from '@angular/core';
import { Workorder } from '../models/Workorder';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

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
    }
  ];
  API_GET_URL = 'http://localhost:8082/workorder';
  API_POST_URL = 'http://localhost:7071/workorder';
  
  constructor(
    private http:HttpClient
  ) { }

  
  //Get Work Order
  getWorkOrder():Observable<Workorder[]>{
    return this.http.get<Workorder[]>(this.API_GET_URL);
  }
  // getWorkOrder(){
  //   return this.workOrders;
  // }

  addWorkOrder(work:Workorder){
    // console.log(work);
    return this.http.post<Workorder>(this.API_POST_URL,work);
  }
  //Add Work Order
  // addTodo(todo:Todo):Observable<Todo>{
  //   return this.http.post<Todo>(this.todoUrls,todo,httpOtions);
  // }

}
