import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  users = null;
  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll()
    .pipe()
    .subscribe(user =>{
      this.users = user;
      console.log(user);
    } )
    
  }
  onStatus(id: number)
  {
    this.userService.getStatus(id).subscribe(
      data =>{
        alert(JSON.stringify(data['message']));
        this.userService.getAll().subscribe(
          data =>{
            this.users = data;
            console.log(data);
          }
        )
      }
    )
  }
  onDelete(id: number){
      let v=confirm("Vous voullez supprimer ?")
      if(v===true)
    this.userService.deleteUser(id).subscribe(data=>{
      
    })
    
  }

}
