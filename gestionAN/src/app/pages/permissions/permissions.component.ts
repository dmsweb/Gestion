import { EmployerService } from 'src/app/services/employer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  permissionForm: FormGroup;
  employes:any;

  constructor(
            private employeService: EmployerService,
            private permissionsService: PermissionsService
  ) { }

  ngOnInit() {
    this.permissionForm= new FormGroup({
      dateDu: new FormControl('', Validators.required),
      audate: new FormControl('', Validators.required),
      motif:  new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      employe:new FormControl('', Validators.required)
    });
    this.employeService.getEmploye().subscribe(
      data =>{
        this.employes = data;
      })
  }
  get f(){return this.permissionForm.controls;}

  onSubmit(){
    if (this.permissionForm.invalid) {
      return;
    }
    const permissions= {
      dateDu: this.permissionForm.value.dateDu,
      audate: this.permissionForm.value.audate,
      motif:  this.permissionForm.value.motif,
      status: this.permissionForm.value.status,
      employe:`api/employes/${this.permissionForm.value.employe}`
    }
    console.log(permissions);
    this.permissionsService.nouveauPermission(permissions).subscribe(data =>
      {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data));
      })
  }
  onReset(){
    this.permissionForm.reset();
  }

}
