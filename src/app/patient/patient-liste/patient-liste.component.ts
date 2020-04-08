import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient/patient';
//import { PatientService } from '../../services/patient.service';
import { PatientsService } from '../../services/patients.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-liste',
  templateUrl: './patient-liste.component.html',
  styleUrls: ['./patient-liste.component.css']
})
export class PatientListeComponent implements OnInit {

  patients: Patient[];
  patientSubscription: Subscription;

  constructor(private patientsService: PatientsService, private router: Router) { } 

  
  ngOnInit(): void {
  
      this.patientsService.getPatients().subscribe(data => {
        this.patients = data.map(e => {
          return {
            id: e.payload.doc.id
            
          } as Patient;
        })
      });
  }


 create(patient: Patient){
   this.patientsService.createPatient(patient);
 }
 
 update(patient: Patient){
   this.patientsService.updatePatient(patient);
 }

 delete(patient: Patient){
   this.patientsService.deletePatient(patient);
 }
}
