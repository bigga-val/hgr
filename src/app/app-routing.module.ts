import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CreateFicheComponent } from './create-fiche/create-fiche.component';
import { AuthGuard } from './guards/auth.guard';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { PatientListeComponent } from './patient/patient-liste/patient-liste.component';
import { SinglePatientComponent } from './patient/single-patient/single-patient.component';
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component'


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'createfiche', component: CreateFicheComponent, canActivate:[AuthGuard] },
  { path: 'createpatient', component: CreatePatientComponent, canActivate:[AuthGuard] },
  { path: 'listepatients', component: PatientListeComponent, canActivate: [AuthGuard] },
  { path: 'viewpatient/view/:id', component: SinglePatientComponent },
  {path: '**', component: QuatreCentQuatreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
