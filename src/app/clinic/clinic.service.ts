import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  private apiUrl = 'https://example.com/api/clinics'; // Замените на реальный URL

  constructor(private http: HttpClient) {}

  registerClinic(clinicData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clinicData);
  }
}
