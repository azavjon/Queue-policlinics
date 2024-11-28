import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterModule} from "@angular/router";


// Интерфейс для врача
export interface Doctor {
  id: number;
  name: string;
  schedule: string[];           // Доступные даты для записи
  clinicAddresses: string[];     // Список адресов клиник
}

// Интерфейс для данных формы записи на приём
export interface AppointmentFormData {
  fullName: string;
  birthYear: number;
  phone: string;
  doctorId: number;
  appointmentDate: string;
  clinicAddress: string;
}

// Класс, реализующий интерфейс Doctor
export class DoctorImplementation implements Doctor {
  id: number;
  name: string;
  schedule: string[];
  clinicAddresses: string[];

  constructor(id: number, name: string, schedule: string[], clinicAddresses: string[]) {
    this.id = id;
    this.name = name;
    this.schedule = schedule;
    this.clinicAddresses = clinicAddresses;
  }

  // Дополнительные методы, если необходимо
  getAvailableDates(): string[] {
    // Пример метода для получения доступных дат
    return this.schedule;
  }
}


@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit {
  queueForm: FormGroup;
  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Доктор Иванов',
      schedule: ['2024-11-10', '2024-11-12'],
      clinicAddresses: ['Клиника 1', 'Клиника 2']
    },
    {
      id: 2,
      name: 'Доктор Петров',
      schedule: ['2024-11-11', '2024-11-13'],
      clinicAddresses: ['Клиника 3']
    }
  ];
  selectedDoctorSchedule: string[] = []; // Явно указываем тип string[]
  selectedClinicAddresses: string[] = []; // Явно указываем тип string[]

  constructor(private fb: FormBuilder) {
    this.queueForm = this.fb.group({
      fullName: ['', Validators.required],
      birthYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+7|7|8)[0-9]{10}$/)]],
      doctor: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      clinicAddress: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onDoctorChange() {
    const selectedDoctor = this.doctors.find(doc => doc.id === this.queueForm.value.doctor);
    if (selectedDoctor) {
      this.selectedDoctorSchedule = selectedDoctor.schedule;
      this.selectedClinicAddresses = selectedDoctor.clinicAddresses;
    } else {
      this.selectedDoctorSchedule = [];
      this.selectedClinicAddresses = [];
    }
  }

  onSubmit() {
    if (this.queueForm.valid) {
      const formData: AppointmentFormData = this.queueForm.value;
      console.log('Форма отправлена:', formData);
      // Здесь можно добавить логику для сохранения или отправки данных
    }
  }
}
