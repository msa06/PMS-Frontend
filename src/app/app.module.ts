import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";


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
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    SidenavComponent,
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
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
