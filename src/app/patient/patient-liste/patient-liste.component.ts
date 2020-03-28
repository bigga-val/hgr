import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient/patient';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-liste',
  templateUrl: './patient-liste.component.html',
  styleUrls: ['./patient-liste.component.css']
})
export class PatientListeComponent implements OnInit, OnDestroy {

  patients: Patient[];
  patientSubscription: Subscription;

  constructor(private patientService: PatientService, private router: Router) { } 

  ngOnInit(): void {
    this.patientSubscription = this.patientService.patientSubject.subscribe(
      (patients:  Patient[]) => {
        this.patients = patients;
      }
    );
    this.patientService.getPatients();
    this.patientService.emettrePatients();
  }
 onNewPatient(){
   this.router.navigate(['/createpatient', 'new']);
 }
 
 onViewPatient(id: number){
   this.router.navigate(['/listepatient', 'view', id]);
 }
 ngOnDestroy(){
   this.patientSubscription.unsubscribe();
 }
}
