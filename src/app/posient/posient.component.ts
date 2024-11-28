import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PosientService} from "./posient.service";
import {Posient} from "./posient";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-posient',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,HttpClientModule],
  templateUrl: './posient.component.html',
  styleUrl: './posient.component.scss'
})
export class PosientComponent {
  potientForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private patientService: PosientService,
    private router: Router
  ) {
    this.potientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username:['',Validators.required],
      password: ['', Validators.required],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      birthyear: [
        '',
        [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]
      ]
    });
  }

  onSubmit(): void {
    if (this.potientForm.valid) {
      const patientData: Posient = this.potientForm.value;

      this.patientService.registerPatient(patientData).subscribe({
        next: (response) => {
          alert('Регистрация прошла успешно');

          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Ошибка регистрации', err);
        }
      });
    } else {
      console.log('Форма невалидна');
      this.potientForm.markAllAsTouched();
    }
  }
}
