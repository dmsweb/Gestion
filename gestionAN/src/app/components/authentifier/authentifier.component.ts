import { Component, OnInit } from '@angular/core';
import { AuthentifierService } from 'src/app/services/authentifier.service';

@Component({
  selector: 'app-authentifier',
  templateUrl: './authentifier.component.html',
  styleUrls: ['./authentifier.component.css']
})
export class AuthentifierComponent implements OnInit {

  constructor(
    private authentifierService: AuthentifierService 
  ) { }

  ngOnInit() {

  }
  onSubmit() {
    
  }

}
