import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentifierComponent } from './components/authentifier/authentifier.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ListeEmployesComponent } from './components/liste-employes/liste-employes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatTabsModule } from '@angular/material';
import { EmployesComponent } from './pages/employes/employes.component';
import { CongesComponent } from './pages/conges/conges.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentifierComponent,
    FormLoginComponent,
    FormRegisterComponent,
    ListeUserComponent,
    ListeEmployesComponent,
    DashboardComponent,
    EmployesComponent,
    CongesComponent,
    PermissionsComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
