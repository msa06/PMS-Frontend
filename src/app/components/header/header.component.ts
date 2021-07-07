import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toolbartitle: string;
  constructor(
    private auth: AuthService,
    private route: Router
  ) {
    this.route.events.subscribe(url => {
      this.toolbartitle = route.url.substr(1);
      this.formatTitle(this.toolbartitle);
    })
  }

  ngOnInit() {
  }

  formatTitle(title: string) {

    switch (title) {
      case 'workorder': this.toolbartitle = "Work Order";
        break;
      case 'products': this.toolbartitle = "Products";
        break;
      case 'ampm': this.toolbartitle = "Annual Maintenance / Preventive Maintenance";
        break;
      case 'notification': this.toolbartitle = "Notification";
        break;
      case 'assets': this.toolbartitle = "Assets";
        break;
      case 'inventory': this.toolbartitle = "Parts / Inventory";
        break;
      case 'profile': this.toolbartitle = "User Profile";
        break;

    }
  }

  logout() {
    this.auth.AuthState = false;
    this.route.navigate(['/login']);
  }
}
