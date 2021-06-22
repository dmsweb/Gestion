import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  usee: User= new User();
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data => {
      this.usee=data;
    }, error =>console.log(error));
   
  }
  onSubmit(){
    this.userService.updateUser(this.id, this.usee).subscribe(data => {
      this.getUsers();

    }, error =>console.log(error));
  }
    getUsers(){
      this.router.navigate(['/Accueil/listeUser'])
    }

}
