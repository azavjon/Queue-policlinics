import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {FormGroup, FormBuilder,Validators} from "@angular/forms";

interface Doctor {
  id: number;
  name: string;
  availableDates: string[];
}

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.scss'
})
export class QueueComponent {
  queueForm: FormGroup;
  doctors: Doctor[] = [
    { id: 1, name: 'Доктор Иванов', availableDates: ['2024-11-10', '2024-11-15', '2024-11-20'] },
    { id: 2, name: 'Доктор Петрова', availableDates: ['2024-11-12', '2024-11-18', '2024-11-25'] },
  ];
  clinics = [
    { id: 1, name: 'Клиника 1', addresses: ['Адрес 1.1', 'Адрес 1.2'] },
    { id: 2, name: 'Клиника 2', addresses: ['Адрес 2.1', 'Адрес 2.2'] }
  ];
  availableDates: string[] = [];

  constructor(private fb: FormBuilder) {
    this.queueForm = this.fb.group({
      fullName: ['', Validators.required],
      birthYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,}$/)]],
      doctor: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      clinic: ['', Validators.required],
      clinicAddress: ['', Validators.required]
    });
  }

  onDoctorChange() {
    const selectedDoctorId = this.queueForm.get('doctor')?.value;
    const selectedDoctor = this.doctors.find(doctor => doctor.id === +selectedDoctorId);
    this.availableDates = selectedDoctor ? selectedDoctor.availableDates : [];
  }

  onSubmit() {
    if (this.queueForm.valid) {
      const registrationData = this.queueForm.value;
      console.log('Данные записи:', registrationData);
      // Здесь можно добавить логику для отправки данных на сервер или сохранения локально
    }
  }
}
