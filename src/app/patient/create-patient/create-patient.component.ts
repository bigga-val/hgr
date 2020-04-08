import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'



@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  db: AngularFirestore;
  createPatientForm : FormGroup;
  loading = false;
  fileUrl: string = '';
  loaded = false;
  patientCollection: AngularFirestoreCollection;


  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router,
              private afs: AngularFirestore
              ) { 
                this.patientCollection = this.afs.collection('patients');
              }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createPatientForm = this.formBuilder.group({
      nomPatient: ['', [Validators.required]],
      postnomPatient: ['', [Validators.required]],
      lieuNaissance: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]]
    });
  }

  savePatient(){
    var identifiant = this.createPatientForm.get('nomPatient').value;
    var fiche = this.createFiche(identifiant);
    const patient = {
      nomPatient: identifiant,
      postnomPatient: this.createPatientForm.get('postnomPatient').value,
      lieuNaissance: this.createPatientForm.get('lieuNaissance').value,
      dateNaissance: this.createPatientForm.get('dateNaissance').value,
      dateEnregistrementPatient: new Date(),
      idFichePatient: fiche,
      id: this.afs.createId()
    };
    this.patientCollection.add(patient);
    this.router.navigate(['/createfiche']);
  
    // if(this.fileUrl && this.fileUrl !== '') {
    //   profile.photo = this.fileUrl;
    //   this.profileService.createNewProfile(profile);
    //   this.router.navigate(['/all-profiles']);
    // }
  }

  createFiche(param){
    var newPostKey = firebase.database().ref().push().key;
    var dat = new Date();
    var datee = dat.getMonth();
    var id = param[2] + newPostKey + datee;
    return id
  }

  getLastElement(){

  }
}
