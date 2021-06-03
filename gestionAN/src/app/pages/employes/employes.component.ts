import { Router } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { ProfileService } from './../../services/profile.service';
import { EmployerService } from './../../services/employer.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  employeForm: FormGroup;
  roles: any;
  services: any;
 
  constructor(

    private employerService: EmployerService,
    private profileService:  ProfileService,
    private servicesService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.employeForm=new FormGroup ({

      username: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      profile: new FormControl('',Validators.required),
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
    this.profileService.getProfile().subscribe(
      data => {
        this.roles = data;
       
      } )
      this.servicesService.getService().subscribe(
        data => {
          this.services = data;
         
        } )
  }
  get f(){return this.employeForm.controls;}

  onSubmit(){

    
    if (this.employeForm.invalid) {
      return;
    }

    const employe={
      username: this.employeForm.value.username,
      password: this.employeForm.value.password,
      noms: this.employeForm.value.noms,
      naissance: this.employeForm.value.naissance,
      adresse: this.employeForm.value.adresse,
      telephone: this.employeForm.value.telephone,
      cin: this.employeForm.value.cin,
      genre: this.employeForm.value.genre,
      sfamiliale: this.employeForm.value.sfamiliale,
      nomFonction: this.employeForm.value.nomFonction,
      profile: `api/roles/${this.employeForm.value.profile}`,
      service:`api/services/${this.employeForm.value.service}`
    }
    console.log(employe);
    this.employerService.ajoutEmployer(employe).subscribe(data =>
      {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data));
        this.router.navigateByUrl('/listeEmployes');
       
      })

  }
  onReset() {
    this.employeForm.reset();
}


}
