import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {IndexComponent} from "../index/index.component";
@Component({
  selector: 'app-clinic',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgIf],
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.scss'
})
export class ClinicComponent {
  clinicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clinicForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      phone: ['', Validators.required],
      type: ['', Validators.required],
      license: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clinicForm.valid) {
      console.log(this.clinicForm.value);
    }
  }
}
