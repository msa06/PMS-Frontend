import { Component, OnInit, ViewChild } from '@angular/core';
import { Workorder } from 'src/app/models/Workorder';
import { MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { DatePipe } from '@angular/common';
import { WorkorderService } from 'src/app/services/workorder.service';
import { Validators, FormControl } from '@angular/forms';

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
  data:Workorder = {};

  schedules:string[]=['Daily','Every Two Weeks','Every Months','Every Three Weeks','Every Six Weeks','Every Year','Custom Schedule'];
  categories:string[]=['None','Damage','Electrical','Inspection','Meter','Preventive','Project','Safety','Upgrade'];
  priorities:string[]=['NONE','LOW','MEDIUM','HIGH'];
  status:string[]=["Open","On Hold","On Progress","Complete"]

  //Variable
  recursivevalue;
  priorityvalue:number;


  @ViewChild(MatSort) sort: MatSort;
  constructor(
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
      Validators.minLength(3)
    ]);
    this.despCtrl = new FormControl('',[Validators.required]);
  }

  selectRow(row){
    console.log(row);
    this.data = row;
  }

  addWorkOrder(newWork:Workorder) {
    this.workorderService.addWorkOrder(newWork).subscribe(
      result =>{
        console.log(result)
        this.ELEMENT_DATA.push(newWork);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.sort = this.sort;
      },
      reject=>{
        console.log('Not Added');
      }
      // workorder=>{  
      // this.ELEMENT_DATA.push(workorder);
      // 
    );
    
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
