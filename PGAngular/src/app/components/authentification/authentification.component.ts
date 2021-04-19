import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  constructor(
    
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit() 
  {

  }
  onSubmit() 
  {

  }

}
