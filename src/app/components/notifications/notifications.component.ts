import { Component, OnInit } from '@angular/core';
import { WorkorderService } from 'src/app/services/workorder.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications:string[];
  constructor(
    private workOrderService:WorkorderService
  ) { }

  ngOnInit() {
    this.workOrderService.getNotification().subscribe(result=>{
      console.log(result);
      this.notifications = result;
      }
    );

  }

}
