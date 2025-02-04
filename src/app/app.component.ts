import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './nav/nav.component';
import { DailyWeatherComponent } from "./component/daily-weather/daily-weather.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, DailyWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Capstone-FE';
}
