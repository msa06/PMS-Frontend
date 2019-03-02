
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { Machine } from 'src/app/models/Machine';
import { WorkorderService } from "src/app/services/workorder.service";
import { Compo } from 'src/app/models/Compo';
import { Subcompo } from 'src/app/models/Subcompo';

@Component({
  selector: 'app-assets-main',
  templateUrl: './assets-main.component.html',
  styleUrls: ['./assets-main.component.scss']
})
export class AssetsMainComponent implements OnInit {
  mselected:string=null;
  cselected:string=null;
  subselected:string=null;
  
  machines:Machine[]=[
      {
          "mid":'MACHINE1',
          "mname": 'machine one',
          "mperform": 'wt-1920kg',
          "mfunc": 'cutting',
          "mmanufacturer":'kurid',
          "mpurchase":'1/2/2019',
          "compindex":[1,3]
      },
      {
        "mid":'MACHINE2',
          "mname": 'machine two',
          "mperform": 'wt-1920kg',
          "mfunc": 'cutting',
          "mmanufacturer":'kurid',
          "mpurchase":'1/2/2019'
    },
    ]
    machinecolumns:string[];
    machinedata;
   

    components:Compo[]=[
      {
        "compid":'COMPONENT1',
        "compname": 'component one',
        "compperform": 'wt-19kg',
        "compfunc": 'cutting',
        "compmanufacturer":'kurid',
        "comppurchase":'1/2/2019'
      },
      {
        "compid":'COMPONENT2',
          "compname": 'component two',
          "compperform": 'wt-20kg',
          "compfunc": 'cutting',
          "compmanufacturer":'kurid',
          "comppurchase":'1/2/2019'
    },
    ]
    componentscolumns:string[];
    componentsdata;

    subcomponents:Subcompo[]=[
      {
        "subcompid":'SUBCOMPONENT1',
        "subcompname": 'subcompnent two',
        "subcompperform": 'wt20kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'26/8/19'
      },
      {
        "subcompid":'SUBCOMPONENT2',
        "subcompname": 'subcomponent two',
        "subcompperform": 'wt-1920kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'1/2/2019'
    },
    ]
    subcolumns:string[];
    subcompdata;
   


    @ViewChild(MatSort) sort: MatSort;
  constructor(
    private workorderService:WorkorderService 
    ) {
    
  }

  ngOnInit() {
    this.machinecolumns= [ 'mid', 'mname', 'mperform','mfunc',' mmanufacturer','mpurchase'];
    this.componentscolumns= [ 'compid', 'compname', 'compperform','compfunc',' compmanufacturer','comppurchase'];
    this.subcolumns= [ 'subcompid', 'subcompname', 'subcompperform','subcompfunc',' subcompmanufacturer','subcomppurchase'];
    
    
  }
  onMachineselect(){
    const filtermachine:Machine[] = this.machines.filter((machine)=>{
      return machine.mid == this.mselected;
    } 
      );
    this.machinedata = new MatTableDataSource(filtermachine);
    this.machinedata.sort = this.sort;
    this.cselected = null;
    this.subselected = null;
  }
  onComponentselect(){
    const filtercomponent:Compo[] = this.components.filter((component)=>{
      return component.compid == this.cselected;
    } 
      );
    this.componentsdata = new MatTableDataSource(filtercomponent);
    this.componentsdata.sort = this.sort;
    this.subselected = null;
  }
  onSubselect(){
    const filtersubcomponent:Subcompo[] = this.subcomponents.filter((subcomponent)=>{
      return subcomponent.subcompid == this.subselected;
    } 
      );
    this.subcompdata = new MatTableDataSource(filtersubcomponent);
    this.subcompdata.sort = this.sort;
  }


}
