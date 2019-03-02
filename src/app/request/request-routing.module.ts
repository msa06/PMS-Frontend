import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestmainComponent } from './requestmain/requestmain.component';

const routes: Routes = [
  {
    path:'',component:RequestmainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }
