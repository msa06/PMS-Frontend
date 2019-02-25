import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { WorkorderRoutingModule } from './workorder-routing.module';
import { WorkorderMainComponent } from './workorder-main/workorder-main.component';
import { WorkorderMenuComponent } from './workorder-main/workorder-menu/workorder-menu.component';
import { WorkorderFilterComponent } from './workorder-main/workorder-filter/workorder-filter.component';
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
   MatButtonToggleModule
  } from "@angular/material";
  import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { WorkorderAddComponent } from './workorder-add/workorder-add.component';

@NgModule({
  declarations: [WorkorderMainComponent, WorkorderMenuComponent, WorkorderFilterComponent, WorkorderTableComponent, WorkorderAddComponent],
  imports: [
    CommonModule,
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
  entryComponents:[WorkorderAddComponent]
})
export class WorkorderModule { }
