import { AuthentifierService } from './../services/authentifier.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;

  constructor(
    private authentifierService: AuthentifierService

  ) {this.currentUser = this.authentifierService.currentUserValue; 
  
  }

  ngOnInit() {
    
  }

}
