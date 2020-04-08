import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Patient } from '../models/patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  db: any;
  constructor(private firestore: AngularFirestore) { }

  getPatients(){
    return this.firestore.collection('patients').snapshotChanges();
  }

  createPatient( patient: Patient){
    return  this.db.collection('patients').doc('patient') ;
  }

  updatePatient(patient: Patient){
    delete patient.id;
    this. firestore.doc('patients/' + patient.id).update(patient);
  }

  deletePatient(patient: Patient){
    this.firestore.doc('patients/' + patient.id).delete();
  }
}
