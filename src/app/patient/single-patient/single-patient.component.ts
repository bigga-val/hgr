import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient/patient';
import { PatientsService } from '../../services/patients.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { AngularFirestore } from 'angularfire2/firestore'; //c'est lui qui me faisait erreur
import { AngularFirestore } from '@angular/fire/firestore'; //or qu'il fallait importer de firestore de cette manière
import { Observable } from 'rxjs';
import { database } from 'firebase';
import { pathExists } from 'fs-extra';


@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.css']
})
export class SinglePatientComponent implements OnInit {

  patients: Observable<Patient>;
  id: string;
  patient: Observable<Patient[]>;
  db = AngularFirestore;

  constructor(private route:  ActivatedRoute,
              private patientService: PatientsService,
              private router: Router,
              private firestore: AngularFirestore
              ) {  }

  ngOnInit(): void {
    //this.patients = this.firestore.doc<Patient>('patients/' + this.id).valueChanges();
    var id = this.route.snapshot.paramMap.get('id');
    let patient = this.getSinglePatient(id);
  }
  

  getSinglePatient(id: string){
    return this.firestore.collection('patients').doc(id).valueChanges();
  }


  onBack(){
    this.router.navigate(['/listepatients']);
  }
}
