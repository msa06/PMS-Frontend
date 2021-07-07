import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkorderService } from 'src/app/services/workorder.service';
import { Machine } from 'src/app/models/Machine';
import { Compo } from 'src/app/models/Compo';
import { Subcompo } from 'src/app/models/Subcompo';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  mselected:string=null;
  cselected:string=null;
  subselected:string=null;
  filtermachine:Machine[]=[];
  filtercomponent:Compo[]=[];
  filtersubcomponent:Subcompo[]=[];
  selectedMachine:Machine;
  
  machines:Machine[]=[
      {
          "mid":1,
          "mname": 'machine one',
          "mperform": 'wt-1920kg',
          "mfunc": 'cutting',
          "mmanufacturer":'kurid',
          "mpurchase":'1/2/2019',
          "compindex":[1,3]
      },
      {
        "mid":2,
          "mname": 'machine two',
          "mperform": 'wt-1920kg',
          "mfunc": 'cutting',
          "mmanufacturer":'kurid',
          "mpurchase":'1/2/2019',
          "compindex":[2,4]
    },
    ]
    machinecolumns:string[];
    machinedata;
   

    components:Compo[]=[
      {
        "compid":1,
        "compname": 'component one',
        "compperform": 'wt-19kg',
        "compfunc": 'cutting',
        "compmanufacturer":'kurid',
        "comppurchase":'1/2/2019',
        "subcompindex":[1,2,4]
      },
      {
        "compid":2,
          "compname": 'component two',
          "compperform": 'wt-20kg',
          "compfunc": 'drilling',
          "compmanufacturer":'kurid',
          "comppurchase":'1/2/2019',
          "subcompindex":[3,5,6]
      },
      {
        "compid":3,
        "compname": 'component three',
        "compperform": 'wt-49kg',
        "compfunc": 'heating',
        "compmanufacturer":'kurid',
        "comppurchase":'1/2/2019',
        "subcompindex":[1,2,3]
      },
      {
        "compid":4,
          "compname": 'component four',
          "compperform": 'wt-20kg',
          "compfunc": 'shaping',
          "compmanufacturer":'kurid',
          "comppurchase":'1/2/2019',
          "subcompindex":[4,5,6]
      },
    ]
    componentscolumns:string[];
    componentsdata;

    subcomponents:Subcompo[]=[
      {
        "subcompid":1,
        "subcompname": 'subcompnent one',
        "subcompperform": 'wt20kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'26/8/19'
      },
      {
        "subcompid":2,
        "subcompname": 'subcomponent two',
        "subcompperform": 'wt-1920kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'1/2/2019'
      },
      {
        "subcompid":3,
        "subcompname": 'subcompnent three',
        "subcompperform": 'wt20kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'26/8/19'
      },
      {
        "subcompid":4,
        "subcompname": 'subcomponent four',
        "subcompperform": 'wt-1920kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'1/2/2019'
      },
      {
        "subcompid":5,
        "subcompname": 'subcompnent five',
        "subcompperform": 'wt20kg',
        "subcompfunc": 'cutting',
        "subcompmanufacturer":'kurid',
        "subcomppurchase":'26/8/19'
      },
      {
        "subcompid":6,
        "subcompname": 'subcomponent six',
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
    private assetService:AssetsService
    ) {
    
  }

  ngOnInit() {
    this.assetService.getMachine().subscribe(result=>{
      this.machines = result;
    });
    this.assetService.getComponets().subscribe(result=>{
      this.components = result;
      console.log(result);
      
    },
    error=>{
      console.log(error);
    });
    this.assetService.getSubComponents().subscribe(result=>{
      this.subcomponents = result;
      console.log(result);
    });


    this.machinecolumns= [ 'mid', 'mname', 'mperform','mfunc',' mmanufacturer','mpurchase'];
    this.componentscolumns= [ 'compid', 'compname', 'compperform','compfunc',' compmanufacturer','comppurchase'];
    this.subcolumns= [ 'subcompid', 'subcompname', 'subcompperform','subcompfunc',' subcompmanufacturer','subcomppurchase'];
    
    
  }
  onMachineselect(){
    this.filtermachine = this.machines.filter((machine)=>{
      return machine.mname == this.mselected;
    });
    this.selectedMachine = this.filtermachine[0];
    this.machinedata = new MatTableDataSource(this.filtermachine);
    this.machinedata.sort = this.sort;
    this.cselected = null;
    this.subselected = null;
    // const comps:number[] = this.filtermachine[0].compindex;
    // for(let i=0;i<comps.length;i++){
    //   for(let j=0;j<this.components.length;j++){
    //     if(this.components[j].compid == comps[i]){
    //       console.log('Matched');
    //       this.filtercomponent.push(this.components[j]);
    //       console.log(this.filtercomponent);
    //     }
    //     console.log('Not matched');
    //   }
    // }
    
  }
  onComponentselect(){
    this.filtercomponent = this.components.filter((component)=>{
      return component.compname == this.cselected;
    } 
      );
    this.componentsdata = new MatTableDataSource(this.filtercomponent);
    this.componentsdata.sort = this.sort;
    this.subselected = null;
    // const subcomps:number[] = this.filtercomponent[0].subcompindex;
    // for(let i=0;i<subcomps.length;i++){
    //   for(let j=0;j<this.subcomponents.length;j++){
    //     if(this.subcomponents[j].subcompid == i){
    //       this.filtersubcomponent.push(this.subcomponents[j]);
    //     }
    //   }
    // }
  }
  onSubselect(){
     this.filtersubcomponent= this.subcomponents.filter((subcomponent)=>{
      return subcomponent.subcompname == this.subselected;
    } 
      );
    this.subcompdata = new MatTableDataSource(this.filtersubcomponent);
    this.subcompdata.sort = this.sort;
  }

}
