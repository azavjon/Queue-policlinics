import { Component } from '@angular/core';
import {RouterModule, Router,Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgFor} from "@angular/common";
import {QueueComponent} from "../queue/queue.component";
import {DoctorsComponent} from "../doctors/doctors.component";
import {ScheduleComponent} from "../schedule/schedule.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,NgFor, QueueComponent, DoctorsComponent, ScheduleComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  baseRoute: string = '/admin';
  searchQuery: string = '';
  links: { name: string, route: string }[] = [];
  filteredLinks: { name: string, route: string }[] = [];

  constructor(private router: Router) {
    if (this.router.url.startsWith('/admin')) {
      this.baseRoute = '/admin';
    }

    this.links = [
      { name: 'Queue', route: `${this.baseRoute}/queue` },
      { name: 'Doctors', route: `${this.baseRoute}/doctors` },
      { name: 'Schedule', route: `${this.baseRoute}/schedule` }, // Исправлено: Schedule с заглавной буквы
    ];

    // Изначально отображаем все ссылки
    this.filteredLinks = this.links;
  }

  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value.toLowerCase();

    // Фильтруем ссылки по введённому запросу
    this.filteredLinks = this.links.filter(link =>
      link.name.toLowerCase().includes(this.searchQuery)
    );
  }
}
