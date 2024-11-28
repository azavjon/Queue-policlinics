import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://192.168.73.103:5044/Auth/Token';  // Замените на URL вашего API

  constructor(private http: HttpClient) {}

  // Метод для выполнения запроса на логин
  login(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, data);
  }

  // Метод для сохранения токена в локальное хранилище после логина
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Метод для получения токена
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Метод для удаления токена при выходе из системы
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
