import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsComponent } from './components/assets/assets.component';
import { WorkorderModule } from './workorder/workorder.module';

const routes: Routes = [
  {path:'assets',component:AssetsComponent},
  {
    path:'workorder',
    loadChildren:'./workorder/workorder.module#WorkorderModule'
  },
  {
    path:'',
    redirectTo:'workorder',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
