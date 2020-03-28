import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Patient } from '../models/patient/patient';
import * as firebase from 'firebase';
import { resolve, reject } from 'q';

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
    firebase.database().ref('/patients').on(
      'value',
      (data: firebase.database.DataSnapshot) => {
        this.patients = data.val() ? data.val() : [];
        this.emettrePatients();
      }
    );
  }

  getSinglePatient(id: number){
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/patients/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },(error) => {
            reject(error);
          }
        );
      }
    );
  }
}