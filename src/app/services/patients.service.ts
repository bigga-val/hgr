import { Injectable } from '@angular/core';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Patient } from '../models/patient/patient';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  db: any;
  patients: Observable<Patient[]>;
  patientsCollection: AngularFirestoreCollection<Patient>;

  constructor(private firestore: AngularFirestore) {
    /*this.patientsCollection = this.firestore.collection('Patients', x => x.orderBy('dateEnregistrementPatient', 'asc'));
    this.patients = this.patientsCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Patient;
            data.id = a.payload.doc.id;
            return  data;
          }
        );
      }
    );*/
   }

  getPatients(){
    return this.firestore.collection('patients').snapshotChanges();
  }

  createPatient( patient: Patient){
    return this.db.collection('patients').doc('patient') ;
  }
 
  singlePatient(id: string){
    return this.firestore.collection('patients/${id}').valueChanges();
  }   

  deletePatient(patientId: string){
    this.db.doc('patients/' + patientId).delete();
  }
  }

