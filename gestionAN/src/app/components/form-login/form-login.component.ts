import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentifierService } from 'src/app/services/authentifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  isError = false;
  messageError: string;

  constructor(
     private authentifierService: AuthentifierService,
     private router: Router,
    
  ) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)

    });
  }
  onSubmit() {
    if (this.loginForm.invalid) 
    {
      return ;
    }
    console.log(this.loginForm.value.login)
    this.loading =true;
    this.authentifierService.login(this.loginForm.value.username, this.loginForm.value.password)
     .subscribe(res =>{
      this.loading= false;
      this.router.navigate(['/Accueil']);
    },
    error => {
      console.log(error);
      this.isError =true;
      if (error["message"]) {
        this.messageError= error["message"];
        
      }else {
        this.messageError = error;
      }
    }

    );
    
  }

}
