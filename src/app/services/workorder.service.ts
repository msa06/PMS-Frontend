import { Injectable } from '@angular/core';
import { Workorder } from '../models/Workorder';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService {
  workOrders:Workorder[]=[
    { due:new Date(),
      woid:101,
      status:'On Hold',
      title:'Test Work Order 1',
      priority:'LOW',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      woid:102,
      status:'On Progress',
      title:'Test Work Order 2',
      priority:'MEDIUM',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    },
    { due:new Date(),
      woid:103,
      status:'On Hold',
      title:'Test Work Order 3',
      priority:'HIGH',
      lastupdated:new Date(2019, 1, 22),
      createdon:new Date()
    }
  ];
  constructor() { }

  getWorkOrder():Workorder[]{
   return this.workOrders;  
  }

}
