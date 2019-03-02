import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { WorkorderRoutingModule } from './workorder-routing.module';
import { WorkorderMainComponent } from './workorder-main/workorder-main.component';
import { WorkorderTableComponent } from './workorder-main/workorder-table/workorder-table.component';
//Material
import {
  MatSidenavModule,
  MatIconModule,
   MatSortModule,
   MatTableModule,
   MatButtonModule, 
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatDatepickerModule,
   MatSelectModule,
   MatButtonToggleModule,
   MatToolbar,
   MatToolbarModule,
   MatMenuModule,
   
   
  } from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { HttpClientModule } from '@angular/common/http';
import { WorkorderEditComponent } from './workorder-main/workorder-edit/workorder-edit.component';


@NgModule({
  declarations: [WorkorderMainComponent,WorkorderTableComponent,WorkorderEditComponent],
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
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
    
  ],
  entryComponents:[
],
  providers:[DatePipe]
})
export class WorkorderModule { }
