import { Component, OnInit } from '@angular/core';
import { FormsModule,Validator, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-workorder-add',
  templateUrl: './workorder-add.component.html',
  styleUrls: ['./workorder-add.component.scss']
})
export class WorkorderAddComponent implements OnInit {
  minDate = new Date(); 
  dateCtrl:FormControl;
  titleCtrl:FormControl;
  despCtrl:FormControl;
  categories:string[]=['None','Damage','Electrical','Inspection','Meter','Preventive','Project','Safety','Upgrade'];
  assignies:string[]=[];
  workers:string[]=[];
  locations:string[]=[];
  orders:string[]=[];
  assets:string[]=[];
  constructor(){}
  
  ngOnInit() {
    this.dateCtrl = new FormControl('',[Validators.required]);
    this.titleCtrl = new FormControl('',[Validators.required]);
    this.despCtrl = new FormControl('',[Validators.required]);

  }

}
