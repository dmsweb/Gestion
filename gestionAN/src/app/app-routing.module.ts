import { EmployesComponent } from './pages/employes/employes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEmployesComponent } from './components/liste-employes/liste-employes.component';
import { CongesComponent } from './pages/conges/conges.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';

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
      path:'Accueil',
      component: DashboardComponent,
      children: [
        {path: 'register', component: FormRegisterComponent},
        {path: 'listeUser', component: ListeUserComponent},
        {path: 'AjouterEmploye', component: EmployesComponent},
        {path: 'NouveauConge', component: CongesComponent},
        {path: 'Permissions', component: PermissionsComponent}
      ]

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
  },
  {
    path: 'AjouterEmploye',
    component: EmployesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
