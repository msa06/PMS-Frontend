import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import { WorkorderService } from "src/app/services/workorder.service";
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {
  idselected:string=null;

  ids:Product[]=[
    {
        "mid":'1',
        "starttime": '12:12AM',
        "endtime": '10:52PM',
        "profit": '200',
        "priority":'1'
    },
    {"mid":'1',
      "starttime": '10:12AM',
    "endtime": '12:52PM',
    "profit": '100',
    "priority":'3'
    },
    {
      "mid":'3',
      "starttime": '12:12AM',
      "endtime": '10:52PM',
      "profit": '90',
      "priority":'1'
  },
  {"mid":'4',
  "starttime": '10:12AM',
  "endtime": '12:52PM',
  "profit": '150',
  "priority":'1'
},
{
  "mid":'1',
  "starttime": '12:12AM',
  "endtime": '10:52PM',
  "profit": '150',
  "priority":'2'
},
{"mid":'2',
"starttime": '10:12AM',
"endtime": '12:52PM',
"profit": '100',
"priority":'2'
},
{"mid":'2',
"starttime": '10:30AM',
"endtime": '12:52PM',
"profit": '150',
"priority":'1'
},
  ]
  idcolumns:string[];
  iddata;
 
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private workorderService:WorkorderService 
    ) {
    
  }
  ngOnInit() {
    this.idcolumns= [ 'mid', 'starttime', 'endtime','profit','priority'];
    this.workorderService.getProduct().subscribe(result=>{
      console.log(result);
      this.ids = result;
    });
  }
  onIdselect(){
    const filterprocomponent:Product[] = this.ids.filter((id)=>{
      return id.mid == this.idselected;
    } 
      );
    this.iddata = new MatTableDataSource(filterprocomponent);
    this.iddata.sort = this.sort;
  }


}
