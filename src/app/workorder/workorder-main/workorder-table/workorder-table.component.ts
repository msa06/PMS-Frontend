import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Workorder } from 'src/app/models/Workorder';


const ELEMENT_DATA: Workorder[] = [
  { due:new Date(),
    woid:101,
    status:'On Hold',
    title:'Test Work Order',
    priority:'LOW',
    lastupdated:new Date(2019, 1, 22),
    createdon:new Date()
  }
];



@Component({
  selector: 'app-workorder-table',
  templateUrl: './workorder-table.component.html',
  styleUrls: ['./workorder-table.component.scss']
})
export class WorkorderTableComponent implements OnInit {
  
  displayedColumns: string[] = ['due', 'woid', 'status', 'title', 'priority', 'assignee', 'location', 'assets', 'lastupdated', 'createdon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.dataSource.sort = this.sort;
  }

}
