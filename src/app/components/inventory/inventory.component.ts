import { Component, OnInit, ViewChild } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { MatSort, MatTableDataSource } from '@angular/material';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  ELEMENT_DATA: Inventory[]=[
    {
       iid:1,
       iname:'aaa',
       iquantity:2,
       icost:2000
    },
    {
      iid:2,
      iname:'bbb',
      iquantity:5,
      icost:4000
   },
   {
    iid:3,
    iname:'ccc',
    iquantity:3,
    icost:2050
 },
 {
  iid:4,
  iname:'ddd',
  iquantity:2,
  icost:2330
},
{
  iid:5,
  iname:'eee',
  iquantity:10,
  icost:3000
},
{
  iid:6,
  iname:'fff',
  iquantity:45,
  icost:2330
},
{
  iid:7,
  iname:'ggg',
  iquantity:33,
  icost:500
},
{
  iid:8,
  iname:'hhh',
  iquantity:2,
  icost:8000
},

  ];
  displayedColumns:string[];
  dataSource;
  


  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private inventoryService:InventoryService 
    ) {
    
  }

  ngOnInit() {
     this.displayedColumns= ['iid', 'iname', 'iquantity', 'icost'];
    //  this.inventoryService.getInventory().subscribe(result=>{
    //    this.ELEMENT_DATA = ;
    //  },
    //  error=>{

    //  }
    //  );
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    

    
    
  }

}
