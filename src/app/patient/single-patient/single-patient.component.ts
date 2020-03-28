import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient/patient';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.css']
})
export class SinglePatientComponent implements OnInit {

  patient: Patient;

  constructor(private route:  ActivatedRoute,
              private patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    this.patient = new Patient();
    const id = this.route.snapshot.params['id'];
    this.patientService.getSinglePatient(+id).then(
      (patient: Patient) => {
        this.patient = patient;
      }
    );
  }
  onBack(){
    this.router.navigate(['/patient']);
  }
}
