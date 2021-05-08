import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEmployesComponent } from './components/liste-employes/liste-employes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: FormLoginComponent
  },
  {
    path: 'register',
    component: FormRegisterComponent
  },
  {
    path: 'listeUser',
    component: ListeUserComponent
  },
  {
    path: 'listeEmployes',
    component: ListeEmployesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
