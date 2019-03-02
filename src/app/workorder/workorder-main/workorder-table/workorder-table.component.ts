import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Workorder } from 'src/app/models/Workorder';
import { WorkorderService } from "src/app/services/workorder.service";
import { MatDialog } from "@angular/material";
import { WorkorderEditComponent } from '../workorder-edit/workorder-edit.component';
import { FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-workorder-table',
  templateUrl: './workorder-table.component.html',
  styleUrls: ['./workorder-table.component.scss']
})
export class WorkorderTableComponent implements OnInit {
  ELEMENT_DATA: Workorder[];
  displayedColumns:string[];
  dataSource;
  workorder:Workorder;
  minDate = new Date(); 
  datevalue;
  workid:number = 120;
  dateCtrl:FormControl;
  titleCtrl:FormControl;
  despCtrl:FormControl;
  newWork:Workorder = {};

  schedules:string[]=['Daily','Every Two Weeks','Every Months','Every Three Weeks','Every Six Weeks','Every Year','Custom Schedule'];
  categories:string[]=['None','Damage','Electrical','Inspection','Meter','Preventive','Project','Safety','Upgrade'];
  priorities:string[]=['NONE','LOW','MEDIUM','HIGH'];
  status:string[]=["Open","On Hold","On Progress","Complete"]

  //Variable
  recursivevalue;
  priorityvalue:number;


  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private datePipe: DatePipe,
    private workorderService:WorkorderService,
    private dialog:MatDialog 
    ) {
      this.displayedColumns= ['due', 'id', 'status', 'title', 'priority', 'assignee', 'location', 'assets', 'lastupdated', 'createdon'];
      
  }

  ngOnInit() {
    
    // this.workorderService.getWorkOrder().subscribe(workorders=>{  
    //   this.ELEMENT_DATA = workorders
    //   console.log(workorders);
      
    //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    //   this.dataSource.sort = this.sort;
    // });
    this.ELEMENT_DATA =  this.workorderService.getWorkOrder();
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort; 
    
    this.dateCtrl = new FormControl('',
    [
      Validators.required,
    ]);
    this.titleCtrl = new FormControl('',[Validators.required,
      Validators.minLength(5)
    ]);
    this.despCtrl = new FormControl('',[Validators.required]);
  }

  selectRow(row){
    const dialogRef = this.dialog.open(WorkorderEditComponent,{
      data:row,
      width:'700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addWorkOrder() {
    
    // const dialogRef = this.dialog.open(WorkorderAddComponent,{
    //   width:'700px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    
  }

}
