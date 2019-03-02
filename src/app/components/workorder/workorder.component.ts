import { Component, OnInit, ViewChild } from '@angular/core';
import { Workorder } from 'src/app/models/Workorder';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import { WorkorderService } from 'src/app/services/workorder.service';
import { Validators, FormControl } from '@angular/forms';
import { WorkorderEditComponent } from 'src/app/workorder/workorder-main/workorder-edit/workorder-edit.component';
import { workers } from 'cluster';

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss']
})
export class WorkorderComponent implements OnInit {
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
  gid:number=120;

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
    
    this.workorderService.getWorkOrder().subscribe(workorders=>{  
      this.ELEMENT_DATA = workorders
      
      
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
    // this.ELEMENT_DATA =  this.workorderService.getWorkOrder();
    // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    // this.dataSource.sort = this.sort; 
    
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

  addWorkOrder(newWork:Workorder) {
    this.workorderServ
    ice.addWorkOrder(newWork).subscribe(workorder=>{  
      console.log(workorder);
    });
    
  }
  onSubmit(){
    this.newWork.title = this.titleCtrl.value;
    this.newWork.id = this.getId();
    this.newWork.description = this.despCtrl.value;
    this.newWork.priority = this.priorities[this.priorityvalue];
    this.newWork.lastupdated = new Date();
    this.newWork.createdon = new Date();
    this.addWorkOrder(this.newWork);
  }
  getId(){
    this.gid = this.gid++;
    return this.gid;
  }

}
