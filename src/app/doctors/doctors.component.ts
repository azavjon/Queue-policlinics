import { Component, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgFor, NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

interface QueueRecord {
  fullName: string;
  birthYear: number;
  phone: string;
  doctor: string;
  appointmentDate: string;
  clinicAddress: string;
}
@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [RouterModule, NgFor, NgForOf, ReactiveFormsModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent implements OnInit {
  queueRecords: QueueRecord[] = [
    {
      fullName: 'Иван Иванов',
      birthYear: 1990,
      phone: '+71234567890',
      doctor: 'Доктор А',
      appointmentDate: '2024-11-10',
      clinicAddress: 'Улица Пушкина, дом Колотушкина'
    },
    {
      fullName: 'Мария Смирнова',
      birthYear: 1985,
      phone: '+71239876543',
      doctor: 'Доктор Б',
      appointmentDate: '2024-11-12',
      clinicAddress: 'Проспект Мира, 15'
    }
  ];

  ngOnInit(): void {
  }
  //
  // constructor(private queueService: QueueService) {}
  //
  // ngOnInit(): void {
  //   this.queueService.getQueueRecords().subscribe(
  //     (data: QueueRecord[]) => {
  //       this.queueRecords = data;
  //     },
  //     error => {
  //       console.error('Ошибка при загрузке данных:', error);
  //     }
  //   );
  // }
// }

}
