import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientListeComponent } from './patient-liste.component';

describe('PatientListeComponent', () => {
  let component: PatientListeComponent;
  let fixture: ComponentFixture<PatientListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
