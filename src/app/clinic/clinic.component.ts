import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators , } from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';
import {RouterModule} from "@angular/router";

import { Router } from '@angular/router';
@Component({
  selector: 'app-clinic',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgIf,RouterModule],
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.scss'
})
export class ClinicComponent {
  clinicForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Инициализация формы с контроллерами и валидацией
    this.clinicForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      type: ['', Validators.required],
      license: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.clinicForm.valid) {
      // Обработка данных формы после успешной валидации
      console.log('Форма отправлена', this.clinicForm.value);

      // Здесь можно добавить логику для отправки данных на сервер
      // или выполнения других действий с данными формы

      // Перенаправление на страницу логина после успешной регистрации
      this.router.navigate(['/login']);
    } else {
      console.log('Форма невалидна');
      // Вывод ошибок или сообщение о необходимости заполнения всех полей
      this.clinicForm.markAllAsTouched();
    }
  }
}
