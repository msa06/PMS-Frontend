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
  MatNativeDateModule,
  MatBadgeModule
  
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { WorkorderComponent } from './components/workorder/workorder.component';
import { RequestComponent } from './components/request/request.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AssetsComponent } from './components/assets/assets.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ProductComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { AMPMComponent } from './components/ampm/ampm.component';
import { HeaderComponent } from './components/header/header.component';

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
    ProductComponent,
    LoginComponent,
    AMPMComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,


    
    //Material
    MatNativeDateModule,
    MatMomentDateModule,
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
    ReactiveFormsModule,
    MatBadgeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
