import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  createPatientForm : FormGroup;
  loading = false;
  fileUrl: string = '';
  loaded = false;

  constructor(private formBuilder: FormBuilder,
              private patientService: PatientService,
              private router: Router
              ) { }

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
    const patient = {
      nomPatient: this.createPatientForm.get('nomPatient').value,
      postnomPatient: this.createPatientForm.get('postnomPatient').value,
      lieuNaissance: this.createPatientForm.get('lieuNaissance').value,
      dateNaissance: this.createPatientForm.get('dateNaissance').value,
    };
    this.patientService.createNewPatient(patient);
    this.router.navigate(['/createfiche']);
  
    // if(this.fileUrl && this.fileUrl !== '') {
    //   profile.photo = this.fileUrl;
    //   this.profileService.createNewProfile(profile);
    //   this.router.navigate(['/all-profiles']);
    // }
  }
}
