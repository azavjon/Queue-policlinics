import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  private apiUrl = 'http://192.168.253.103:5044/api/Appointments'; // URL вашего сервера

  constructor(private http: HttpClient) { }

  sendAppointmentData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
