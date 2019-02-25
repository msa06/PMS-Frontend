import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Workorder } from 'src/app/models/Workorder';
import { WorkorderService } from "src/app/services/workorder.service";


let ELEMENT_DATA: Workorder[] = [];



@Component({
  selector: 'app-workorder-table',
  templateUrl: './workorder-table.component.html',
  styleUrls: ['./workorder-table.component.scss']
})
export class WorkorderTableComponent implements OnInit {
  
  displayedColumns: string[] = ['due', 'woid', 'status', 'title', 'priority', 'assignee', 'location', 'assets', 'lastupdated', 'createdon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  workorders:Workorder[];

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private workorderService:WorkorderService 
    ) {
    
  }

  ngOnInit() {
    this.workorders = this.workorderService.getWorkOrder();
    this.workorders.forEach((workorder)=>{
      ELEMENT_DATA.push(workorder)
    });
    this.dataSource.sort = this.sort;
  }

}
