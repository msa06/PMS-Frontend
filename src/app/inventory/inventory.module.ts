import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryMainComponent } from './inventory-main/inventory-main.component';
import { MatSortModule, MatTableModule } from '@angular/material';

@NgModule({
  declarations: [InventoryMainComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MatSortModule,
   MatTableModule,
  ]
})
export class InventoryModule { }
