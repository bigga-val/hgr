import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient/patient';
//import { PatientService } from '../../services/patient.service';
import { PatientsService } from '../../services/patients.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-patient-liste',
  templateUrl: './patient-liste.component.html',
  styleUrls: ['./patient-liste.component.css']
})
export class PatientListeComponent implements OnInit {

  patients: Patient[];
  patientSubscription: Subscription;
  

  constructor(private patientsService: PatientsService, private router: Router, public afs: AngularFirestore) { 
    
   } 

  
  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.patientsService.getPatients().subscribe(data => {
      this.patients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Patient
        }
      });
    });
  }
  deletePat(id: string){
    this.patientsService.deletePatient(id);
  }
 }

