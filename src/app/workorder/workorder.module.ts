import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkorderRoutingModule } from './workorder-routing.module';
import { WorkorderMainComponent } from './workorder-main/workorder-main.component';
import { WorkorderMenuComponent } from './workorder-main/workorder-menu/workorder-menu.component';
import { WorkorderFilterComponent } from './workorder-main/workorder-filter/workorder-filter.component';
import { WorkorderTableComponent } from './workorder-main/workorder-table/workorder-table.component';

@NgModule({
  declarations: [WorkorderMainComponent, WorkorderMenuComponent, WorkorderFilterComponent, WorkorderTableComponent],
  imports: [
    CommonModule,
    WorkorderRoutingModule
  ]
})
export class WorkorderModule { }
