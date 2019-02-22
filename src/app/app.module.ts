import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Router, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkorderComponent } from './components/workorder/workorder.component';
import { AssetsComponent } from './components/assets/assets.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const appRoutes:Routes = [
  {path:'',component:WorkorderComponent},
  {path:'assets',component:AssetsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkorderComponent,
    AssetsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
