import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssetsComponent } from './components/assets/assets.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  
} from '@angular/material';
import { WorkorderAddComponent } from './components/workorder/workorder-add/workorder-add.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    SidenavComponent,
    WorkorderAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
