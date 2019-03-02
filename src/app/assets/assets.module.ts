import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRoutingModule } from './assets-routing.module';
import { AssetsMainComponent } from './assets-main/assets-main.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatSelectModule, MatSidenavModule, MatSliderModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [AssetsMainComponent],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    DragDropModule,
    ScrollingModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class AssetsModule { }
