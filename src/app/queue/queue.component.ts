import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { QueueService } from './queue.service';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common"; // Импортируйте сервис

interface Doctor {
  id: number;
  name: string;
  availableDates: string[];
}

interface Clinic {
  id: number;
  name: string;
  addresses: string[];
}

interface AppointmentFormData {
  fullName: string;
  birthYear: number;
  phone: string;
  doctor: number;
  appointmentDate: string;
  clinic: number;
  clinicAddress: string;
}

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {
  queueForm: FormGroup;
  doctors: Doctor[] = [
    { id: 1, name: 'Доктор Иванов', availableDates: ['2024-11-10', '2024-11-15', '2024-11-20'] },
    { id: 2, name: 'Доктор Петрова', availableDates: ['2024-11-12', '2024-11-18', '2024-11-25'] },
  ];
  clinics: Clinic[] = [
    { id: 1, name: 'Клиника 1', addresses: ['Адрес 1.1', 'Адрес 1.2'] },
    { id: 2, name: 'Клиника 2', addresses: ['Адрес 2.1', 'Адрес 2.2'] }
  ];
  availableDates: string[] = [];
  availableAddresses: string[] = [];

  constructor(private fb: FormBuilder, private queueService: QueueService) {
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

  onClinicChange() {
    const selectedClinicId = this.queueForm.get('clinic')?.value;
    const selectedClinic = this.clinics.find(clinic => clinic.id === +selectedClinicId);
    this.availableAddresses = selectedClinic ? selectedClinic.addresses : [];
    this.queueForm.get('clinicAddress')?.reset(); // Сбросить выбранный адрес при изменении клиники
  }

  onSubmit() {
    if (this.queueForm.valid) {
      const registrationData: AppointmentFormData = this.queueForm.value; // Типизация данных
      console.log('Данные записи:', registrationData);
      this.queueService.sendAppointmentData(registrationData).subscribe(response => {
        console.log('Ответ сервера:', response);
      }, error => {
        console.error('Ошибка отправки данных:', error);
      });
    }
  }
}
