import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosientService {

  private apiUrl = 'http://192.168.253.103:5044/api/Users'; // Замените на ваш URL API

  constructor(private http: HttpClient) {}

  // Метод для отправки данных на сервер (регистрация)
  registerPatient(patientData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, patientData);
  }
}
