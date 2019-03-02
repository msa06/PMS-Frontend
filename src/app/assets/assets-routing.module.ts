import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetsMainComponent } from './assets-main/assets-main.component';

const routes: Routes = [
  {
    path:'',
    component:AssetsMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRoutingModule { }
