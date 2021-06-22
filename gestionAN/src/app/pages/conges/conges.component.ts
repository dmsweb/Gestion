import { EmployerService } from './../../services/employer.service';
import { CongesService } from './../../services/conges.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.css']
})
export class CongesComponent implements OnInit {

  congesForm: FormGroup;
  employes: any;

  constructor(

    private congesService: CongesService,
    private employerService: EmployerService
  ) { }

  ngOnInit() {
    this.congesForm= new FormGroup({
      dateFin: new FormControl('', Validators.required),
      dateReprise: new FormControl('', Validators.required),
      typeConge: new FormControl('', Validators.required),
      nbrejours: new FormControl('', Validators.required),
      employe: new FormControl('', Validators.required),
      dateDebut: new FormControl('', Validators.required)
    });
    this.employerService.getEmploye().subscribe(
      data =>{
        this.employes = data;
      })
  }
  get f(){return this.congesForm.controls;}

  onSubmit(){
    
    if (this.congesForm.invalid) {
      return;
    }
    const conges= {
      dateFin: this.congesForm.value.dateFin,
      dateReprise: this.congesForm.value.dateReprise,
      typeConge: this.congesForm.value.typeConge,
      nbrejours: this.congesForm.value.nbrejours,
      dateDebut: this.congesForm.value.dateDebut,
      employe: `api/employes/${this.congesForm.value.employe}`
    }
    console.log(conges);
    this.congesService.nouveauConge(conges).subscribe(data =>
      {
        alert(JSON.stringify(data["message"]));
      })
  }
    onReset(){
      this.congesForm.reset();
    }
}
