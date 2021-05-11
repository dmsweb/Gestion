import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material';


@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {

  users: any;
  pagination: any;
  page: number=1;
  prec = false;
  suiv= true;
  loading= true;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatPaginator,null) paginator: MatPaginator;
  constructor(
    private userService: UserService,
    
  ) { }

  ngOnInit() {
    
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
  onStatus(id: number)
  {
    this.loading = true;
    this.userService.getStatus(id).subscribe(res =>{

       alert(JSON.stringify(res['message']));
       this.listerUser(this.page);
      }
    )
  }
  onDelete(id: number){
      let v=confirm("Vous voullez supprimer ?")
      if(v===true)
    this.userService.deleteUser(id).subscribe(data=>{
      this.users=data;
      
    })
    
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

}
