import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Day } from '../interfaces/day';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'http://localhost:4200/'; 
    
  constructor(private http: HttpClient) {}

  getDailyWeather(location: string): Observable<Day> {
    return this.http.get<Day>(`${this.baseUrl}forecast.json?q=${location}&days=1`);
  }
}