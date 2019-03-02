import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkorderModule } from './workorder/workorder.module';
import { RequestModule } from "./request/request.module";
import { AssetsModule } from "./assets/assets.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:'workorder',
    loadChildren:'./workorder/workorder.module#WorkorderModule',
    
  },
  {
    path:'request',
    loadChildren:'./request/request.module#RequestModule',
    
  },
  {
    path:'assets',
    loadChildren:'./assets/assets.module#AssetsModule',
    
  },
  {
    path:'inventory',
    loadChildren:'./inventory/inventory.module#InventoryModule',
    
  },
  {
    path:'profile',
    component:ProfileComponent
    
  },
  {
    path:'',
    redirectTo:'workorder',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
