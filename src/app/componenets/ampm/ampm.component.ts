import { Component, OnInit } from '@angular/core';
import { WorkorderService } from 'src/app/services/workorder.service';
import { Ampmitem } from 'src/app/models/Ampmitem';

@Component({
  selector: 'app-ampm',
  templateUrl: './ampm.component.html',
  styleUrls: ['./ampm.component.scss']
})
export class AMPMComponent implements OnInit {
  ampmitem:Ampmitem={};






  constructor(private workorderService:WorkorderService) { }

  ngOnInit() {
    this.workorderService.getMachine().subscribe(result=>{
      console.log(result);
    });
  }

  OnSubmit(){
    
  }

}
