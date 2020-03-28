import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';

import * as firebase from 'firebase';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PatientListeComponent } from './patient/patient-liste/patient-liste.component';
import { SinglePatientComponent } from './patient/single-patient/single-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    CreateFicheComponent,
    CreatePatientComponent,
    PatientListeComponent,
    SinglePatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
