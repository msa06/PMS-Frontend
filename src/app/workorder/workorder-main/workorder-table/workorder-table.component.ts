import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Workorder } from 'src/app/models/Workorder';
import { WorkorderService } from "src/app/services/workorder.service";


@Component({
  selector: 'app-workorder-table',
  templateUrl: './workorder-table.component.html',
  styleUrls: ['./workorder-table.component.scss']
})
export class WorkorderTableComponent implements OnInit {
  ELEMENT_DATA: Workorder[];
  displayedColumns:string[];
  dataSource;
  
  workorders:Workorder[];

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private workorderService:WorkorderService 
    ) {
    
  }

  ngOnInit() {
    this.ELEMENT_DATA = this.workorderService.getWorkOrder();

    this.displayedColumns= ['due', 'woid', 'status', 'title', 'priority', 'assignee', 'location', 'assets', 'lastupdated', 'createdon'];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

}
