import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);
  baseUrl = 'https://localhost:7074/api/weather/'; 

  getDailyWeather() {
    return this.http.get(this.baseUrl + 'daily');
  }

  getWeatherByDay(date: string) {
    return this.http.get(this.baseUrl + `day/${date}`);
  }

  getHourlyWeather() {
    return this.http.get(this.baseUrl + 'hourly');
}
