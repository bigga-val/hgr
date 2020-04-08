import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';


import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PatientListeComponent } from './patient/patient-liste/patient-liste.component';
import { SinglePatientComponent } from './patient/single-patient/single-patient.component';
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {environment} from '../environments/environment';
//import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase';
import { HomeComponent } from './home/home.component';

firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    CreateFicheComponent,
    CreatePatientComponent,
    PatientListeComponent,
    SinglePatientComponent,
    QuatreCentQuatreComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
