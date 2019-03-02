import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileComponent } from './components/profile/profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatButtonToggleModule,
  
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { WorkorderModule } from './workorder/workorder.module';
import { WorkorderMainComponent } from './workorder/workorder-main/workorder-main.component';
import { WorkorderComponent } from './components/workorder/workorder.component';
import { RequestComponent } from './components/request/request.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AssetsComponent } from './components/assets/assets.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotificationsComponent,
    SidenavComponent,
    WorkorderComponent,
    RequestComponent,
    InventoryComponent,
    AssetsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WorkorderModule,
    FormsModule,
    HttpClientModule,

    MatSidenavModule,
  
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
