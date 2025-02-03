import { Component, OnInit } from '@angular/core';

@Component({
  selector:     'app-daily-weather',
  templateUrl:  './daily-weather.component.html',
  styleUrl:   './daily-weather.component.css'
})

export class DailyWeatherComponent implements OnInit {
  weather: any;
  location: string = "Detroit, MI"

  ngOnInit(): void {
    this.weather = {
      dateTime:     new Date(),    // Date and Time
      tempMax:      36,            // High Temps
      tempMin:      22,            // Low Temps
      feelsLike:    24,            // Feels Like temperature
      windSpeed:    10,            // Wind Speed
      windDir:      187,           // Wind Direction
      sunrise:      "07:10 AM",    // Sunrise time
      sunset:       "06:48 PM",    // Sunset time
      humidity:     50,            // Humidity 
      description:  "Cloudy",      // Weather Conditions
      precipProb:   14,            // Precipitation %
    };
    
  }

}
