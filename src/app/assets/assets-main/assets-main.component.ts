
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
          "aid": 1,
          "aname": 'aaa',
          "atype": 'fghtyy',
          "adesc": 'tyjgifg',
          "acost": 2000
      },
      {
        "aid": 2,
        "aname": 'bbb',
        "atype": 'fghtyy',
        "adesc": 'tyjgifg',
        "acost": 3000
    },
    ]
    machinecolumns:string[];
    machinedata;
   

    components:Compo[]=[
      {
          "cid": 1,
          "cname": 'cccc',
          "ctype": 'fghtyy',
          "cdesc": 'tyjgifg',
          "ccost": 2000
      },
      {
        "cid": 2,
        "cname": 'ddd',
        "ctype": 'fghtyy',
        "cdesc": 'tyjgifg',
        "ccost": 3000
    },
    ]
    componentscolumns:string[];
    componentsdata;

    subcomponents:Subcompo[]=[
      {
          "sid": 1,
          "sname": 'aaa',
          "stype": 'fghtyy',
          "sdesc": 'tyjgifg',
          "scost": 2000
      },
      {
        "sid": 2,
        "sname": 'bbb',
        "stype": 'fghtyy',
        "sdesc": 'tyjgifg',
        "scost": 3000
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
    this.machinecolumns= ['aid', 'aname', 'atype', 'adesc','acost'];
    this.componentscolumns= ['cid', 'cname', 'ctype', 'cdesc','ccost'];
    this.subcolumns= ['sid', 'sname', 'stype', 'sdesc','scost'];
    
    
  }
  onMachineselect(){
    const filtermachine:Machine[] = this.machines.filter((machine)=>{
      return machine.aname == this.mselected;
    } 
      );
    this.machinedata = new MatTableDataSource(filtermachine);
    this.machinedata.sort = this.sort;
  }
  onComponentselect(){
    const filtercomponent:Compo[] = this.components.filter((component)=>{
      return component.cname == this.cselected;
    } 
      );
    this.componentsdata = new MatTableDataSource(filtercomponent);
    this.componentsdata.sort = this.sort;
  }
  onSubselect(){
    const filtersubcomponent:Subcompo[] = this.subcomponents.filter((subcomponent)=>{
      return subcomponent.sname == this.subselected;
    } 
      );
    this.subcompdata = new MatTableDataSource(filtersubcomponent);
    this.subcompdata.sort = this.sort;
  }


}
