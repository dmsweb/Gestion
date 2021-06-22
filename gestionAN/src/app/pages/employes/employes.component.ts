import { Router } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { ProfileService } from './../../services/profile.service';
import { EmployerService } from './../../services/employer.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  employeForm: FormGroup;
  users: any;
  services: any;
  loading=true;
  message:string;
 
  constructor(

    private employerService: EmployerService,
    private userService: UserService,
    private servicesService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeForm=new FormGroup ({

     
      user: new FormControl('',Validators.required),
      noms: new FormControl('',Validators.required),
      naissance: new FormControl('',Validators.required),
      adresse: new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      cin: new FormControl('',Validators.required),
      genre: new FormControl('',Validators.required),
      sfamiliale: new FormControl('',Validators.required),
      nomFonction: new FormControl('',Validators.required),
      service: new FormControl('',Validators.required)
    });
    
  }
  get f(){return this.employeForm.controls;}

  onSubmit(){
        
     this.loading=true;
    
    if (this.employeForm.invalid) {
      return;
    }

    const employe={
     
      noms: this.employeForm.value.noms,
      naissance: this.employeForm.value.naissance,
      adresse: this.employeForm.value.adresse,
      telephone: this.employeForm.value.telephone,
      cin: this.employeForm.value.cin,
      genre: this.employeForm.value.genre,
      sfamiliale: this.employeForm.value.sfamiliale,
      nomFonction: this.employeForm.value.nomFonction,
      user:        this.employeForm.value.user,
      service:     this.employeForm.value.service
    }
    console.log(employe);
    this.employerService.ajoutEmployer(employe).subscribe(data =>
      {
       alert(JSON.stringify(data["message"]));
        this.router.navigate(['/Accueil/listeEmployes']);
      }, 
      error => console.log(error));
  
  }
  onReset() {
    this.employeForm.reset();
}


}
