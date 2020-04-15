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
import { QuatreCentQuatreComponent } from './quatre-cent-quatre/quatre-cent-quatre.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'createfiche', component: CreateFicheComponent, canActivate:[AuthGuard] },
  { path: 'createpatient', component: CreatePatientComponent, canActivate:[AuthGuard] },
  { path: 'listepatients', component: PatientListeComponent, canActivate: [AuthGuard] },
  { path: 'viewpatient/:id', component: SinglePatientComponent },
  { path: 'not-found', component: QuatreCentQuatreComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
