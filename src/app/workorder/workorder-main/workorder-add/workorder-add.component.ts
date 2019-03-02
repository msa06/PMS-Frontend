import { Component, OnInit } from '@angular/core';
import { FormsModule,Validator, FormControl, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Workorder } from 'src/app/models/Workorder';
import { WorkorderService } from 'src/app/services/workorder.service';

@Component({
  selector: 'app-workorder-add',
  templateUrl: './workorder-add.component.html',
  styleUrls: ['./workorder-add.component.scss']
})
export class WorkorderAddComponent implements OnInit {
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
  
  constructor(
    private datePipe: DatePipe,
    private workorderService:WorkorderService
  ){}
  
  ngOnInit() {
    this.dateCtrl = new FormControl('',
    [
      Validators.required,
    ]);
    this.titleCtrl = new FormControl('',[Validators.required,
      Validators.minLength(5)
    ]);
    this.despCtrl = new FormControl('',[Validators.required]);
  } 

  
  onSubmit(){
    this.datevalue = this.datePipe.transform(this.dateCtrl.value,'dd/MM/yyyy');
    
    this.newWork.due = this.datevalue;
    this.newWork.id = this.getwoid(this.workid);
    this.newWork.status = this.status[0];
    this.newWork.title = this.titleCtrl.value;
    this.newWork.description = this.despCtrl.value;
    this.newWork.priority = this.priorities[this.priorityvalue];
    this.newWork.lastupdated = new Date();
    this.newWork.createdon = new Date();

    //call the services
    this.workorderService.addWorkOrder(this.newWork).subscribe(workorder=>{
      console.log(workorder);
    });
    // console.log(this.newWork.due);
    // console.log(this.newWork.id);
    // console.log(this.newWork.status);
    // console.log(this.newWork.title);
    // console.log(this.newWork.description);
    // console.log(this.newWork.priority);
    // console.log(this.newWork.lastupdated);
    // console.log(this.newWork.createdon);
  }
  getwoid(woid){
    woid = woid++;
    return woid;
  }


}
