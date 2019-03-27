import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { WorkorderComponent } from './components/workorder/workorder.component';
import { AssetsComponent } from './components/assets/assets.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RequestComponent } from './components/request/request.component';
import { from } from 'rxjs';
import { ProductComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { AMPMComponent } from './components/ampm/ampm.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
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
    path:'ampm',
    component:AMPMComponent
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
    path:'products',
    component:ProductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'notification',
    component:NotificationsComponent
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
