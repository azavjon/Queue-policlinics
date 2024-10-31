import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {CommonModule, NgIf} from "@angular/common";
import {PosientComponent} from "../posient/posient.component";
import {ClinicComponent} from "../clinic/clinic.component";


@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule, PosientComponent, ClinicComponent, NgIf ],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {

  selectedForm: 'patient' | 'clinic' | null = null;

  showPatientFields() {
    this.selectedForm = 'patient';
  }

  showClinicFields() {
    this.selectedForm = 'clinic';
  }
}
