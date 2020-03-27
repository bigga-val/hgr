import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Patient } from '../models/patient/patient';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  public patients: Patient[] = [];
  public patientSubject = new Subject<Patient[]>();

  constructor() { }

  emettrePatients() {
    this.patientSubject.next(this.patients);
  }

  savePatient() {
    firebase.database().ref('/patients').set(this.patients);
  }

  createNewPatient(patient: Patient) {
    this.patients.push(patient);
    this.savePatient();
    this.emettrePatients();
  }

  getPatients() {
    firebase.database().ref('/patient').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
        this.patients = data.val() ? data.val() : [];
        this.emettrePatients();
      }
    );
  }
}
