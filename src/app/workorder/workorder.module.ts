import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { WorkorderRoutingModule } from './workorder-routing.module';
import { WorkorderMainComponent } from './workorder-main/workorder-main.component';
import { WorkorderMenuComponent } from './workorder-main/workorder-menu/workorder-menu.component';
import { WorkorderTableComponent } from './workorder-main/workorder-table/workorder-table.component';
//Material
import {
   MatSortModule,
   MatTableModule,
   MatButtonModule, 
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatDatepickerModule,
   MatSelectModule,
   MatButtonToggleModule,
  } from "@angular/material";
  import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { WorkorderAddComponent } from './workorder-main/workorder-add/workorder-add.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WorkorderMainComponent, WorkorderMenuComponent,WorkorderTableComponent, WorkorderAddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WorkorderRoutingModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  entryComponents:[WorkorderAddComponent],
  providers:[DatePipe]
})
export class WorkorderModule { }
