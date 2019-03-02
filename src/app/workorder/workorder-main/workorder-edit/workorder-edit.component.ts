import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Workorder } from 'src/app/models/Workorder';
import { WorkorderService } from 'src/app/services/workorder.service';

@Component({
  selector: 'app-workorder-edit',
  templateUrl: './workorder-edit.component.html',
  styleUrls: ['./workorder-edit.component.scss']
})
export class WorkorderEditComponent implements OnInit {

  status= "Open";
  constructor(@Inject(MAT_DIALOG_DATA) public data: Workorder,
    private workService:WorkorderService
  ) {
    this.status = data.status;
  }

  onDelete(){
    this.workService.deleteWorkOrder(this.data);
  }

  ngOnInit() {
  }

}
