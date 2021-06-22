import { CongesService } from './../../services/conges.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiche-conges',
  templateUrl: './affiche-conges.component.html',
  styleUrls: ['./affiche-conges.component.css']
})
export class AfficheCongesComponent implements OnInit {
  conges: any;

  constructor(
    private congesService: CongesService
  ) { }

  ngOnInit() {
  
      this.congesService.getAllConges().subscribe(
        
        data =>{
          this.conges=data["hydra:member"];
        })
    
  }
 
  

}
