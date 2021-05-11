import { EmployerService } from 'src/app/services/employer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {
  employes= null;

  constructor(
    private employerService: EmployerService
  ) { }

  ngOnInit() {
    this.employerService.listeEmployer().pipe().subscribe(user =>{
      this.employes=user;
      console.log(user);
    })
  }

}
