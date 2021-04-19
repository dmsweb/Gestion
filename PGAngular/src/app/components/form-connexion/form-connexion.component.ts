import { User } from './../../models/user';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.css']
})
export class FormConnexionComponent implements OnInit {
  
  connexionForm: FormGroup;
  constructor(
    private authentificationService: AuthentificationService
  ) { }

  ngOnInit() {
    this.connexionForm= new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')

    });
  }
  onSubmit()
  {
    const user= 
    {
      username: this.connexionForm.value.username,
      password: this.connexionForm.value.password
    }as User
    this.authentificationService.connexion(user).subscribe(
      (data) =>
      {
        console.warn(data);
      },
      error =>
      {
        console.warn('connexion échoué !!');
      }
    )
   
    
  }

}
