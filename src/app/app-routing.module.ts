import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ LogComponent } from './log/log.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkorderComponent } from './components/workorder/workorder.component';
import { AssetsComponent } from './components/assets/assets.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RequestComponent } from './components/request/request.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'Login',
component:LogComponent
  },
  {
    path:'workorder',
    component:WorkorderComponent
  },
  {
    path:'assets',
    component:AssetsComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'request',
    component:RequestComponent
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
