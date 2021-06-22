import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material';
import { EmployerService } from 'src/app/services/employer.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {

  employes: any;
  pagination: any;
  page: number=1;
  prec = false;
  suiv= true;
  loading= true;
  user=true;
  datas:any
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatPaginator,null) paginator: MatPaginator;
  constructor(
    private employerService: EmployerService,
    private userService: UserService
  ) { }

  ngOnInit():void {
    this.user=true;
    this.refresh();
  }

  listeEmployer(page){
    this.employerService.listeEmployer(this.page).subscribe(data =>{
      if(data["length"] == 0){
        this.listeEmployer(this.page - 1);
        this.loading = false;
        // console.log(data["length"]);
      }
      else{
        this.employes = data;
        this.loading= false;
      }
    },
    error =>{
      this.loading=false;
    });
  }
  loadPagePrec()
  {
    if(this.page > 1)
    {
      this.page = this.page - 1;
      this.suiv = true;
      this.listeEmployer(this.page);
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
    this.listeEmployer(this.page);
    this.prec = true;
  }

  onDelete(id: number){
    if (this.user) {
      return;
    }
    this.user =true;
    this.employerService.deleteEmploye(id).subscribe(() => {
      this.refresh();
    });
    
  }
  private refresh(){
    this.userService.listerUser(this.page).subscribe(datas => {
      this.datas= datas;
      this.user= false;

    })
  }
}
