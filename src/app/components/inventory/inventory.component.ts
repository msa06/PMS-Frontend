import { Component, OnInit, ViewChild } from '@angular/core';
import { Inventory } from 'src/app/models/Inventory';
import { MatSort, MatTableDataSource } from '@angular/material';
import { WorkorderService } from 'src/app/services/workorder.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  ELEMENT_DATA: Inventory[]=[
    {
      id:1,
       name:'aaa',
       quantity:2,
       cost:2000
    }
  ];
  displayedColumns:string[];
  dataSource;
  


  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private workorderService:WorkorderService 
    ) {
    
  }

  ngOnInit() {
     this.displayedColumns= ['id', 'name', 'quantity', 'cost'];
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    

    
    
  }

}
