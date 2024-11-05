import { Component } from '@angular/core';
import{RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-posient',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './posient.component.html',
  styleUrl: './posient.component.scss'
})
export class PosientComponent {
  patientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthyear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
    }
  }
}
