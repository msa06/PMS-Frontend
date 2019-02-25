import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WorkorderAddComponent } from '../../workorder-add/workorder-add.component';

@Component({
  selector: 'app-workorder-menu',
  templateUrl: './workorder-menu.component.html',
  styleUrls: ['./workorder-menu.component.scss']
})
export class WorkorderMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  addWorkOrder() {
    const dialogRef = this.dialog.open(WorkorderAddComponent,{
      width:'700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
  }

}
