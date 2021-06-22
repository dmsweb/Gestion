import { Router } from '@angular/router';
import { AuthentifierService } from './../../services/authentifier.service';
import { User } from './../../models/user';
import { FormGroup, FormControl } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  
  registerForm: FormGroup;
  users: any;
  pagination: any;
  page: number=1;
  prec = false;
  suiv= true;
  loading= true;
  username:any;
  idUpdate:number;
  userUpdate:any;
  user=true;
  datas:any
  usee: User;
  
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatPaginator,null) paginator: MatPaginator;
  constructor(
    private userService: UserService,
    private authentifierService: AuthentifierService,
    private router: Router
    
  ) {
      
   }

  ngOnInit():void {
    
    this.listerUser(this.page);
    
  }
  listerUser(page){
    this.userService.listerUser(this.page).subscribe(data =>{
      if(data["length"] == 0){
        this.listerUser(this.page - 1);
        this.loading = false;
        // console.log(data["length"]);
      }
      else{
        this.users = data;
        this.loading= false;
      }
    },
    error =>{
      this.loading=false;
    });
  }
  Search(){
    if (this.username == "") {
      this.listerUser(this.page);
      
    }else{
      this.users= this.users.filter(res =>{
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  onStatus(id: number)
  {
   
    this.userService.getStatus(id).subscribe(
    data =>{
       alert(JSON.stringify(data["message"]));
       this.userService.listerUser(this.page).subscribe(
       data=>{
        this.users=data;
        console.log(data);
       })
      }
    )
  }
 //Modification de User
updateUsers(id: number){
  this.router.navigate(['/Accueil/ModifierUser', id]);
}
  //Mise en jour du user
  // update(){
  //   this.loading=true;
  //   const user={
  //     username: this.registerForm.value.username,
  //     password: this.registerForm.value.password,
  //     profile: `api/profiles/${this.registerForm.value.profile}`
  //   }
  //   this.userService.updateUser(this.idUpdate,user).subscribe( res =>{
  //     this.listerUser(this.page);
  //     this.idUpdate = null;
  //   },
  //   error =>{
  //     console.log(error);
  //     this.loading=false;
  //   }
  //   )
  // }

  onDelete(id: number){

    let conf= confirm("Etes vous sûr ?");
    if (conf)
   this.userService.deleteUser(id)
      .pipe(first())
      .subscribe(() => this.listerUser(this.page));
    
  }
  loadPagePrec()
  {
    if(this.page > 1)
    {
      this.page = this.page - 1;
      this.suiv = true;
      this.listerUser(this.page);
    }
    else
    {
      this.page = 1;
      this.prec = false;
      this.suiv = true;
    }
  }
  loadPageNext()
  {
    this.page ++;
    this.listerUser(this.page);
    this.prec = true;
  }

  private refresh(){
    this.userService.listerUser(this.page).subscribe(datas => {
      this.datas= datas;
      this.user= false;

    })
  }
}
