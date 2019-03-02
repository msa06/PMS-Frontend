import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkorderMainComponent } from './workorder-main/workorder-main.component';

const routes: Routes = [
  {
    path:'',component:WorkorderMainComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkorderRoutingModule { }
