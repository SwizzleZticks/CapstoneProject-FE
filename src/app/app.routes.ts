import { Routes } from '@angular/router';
import {DailyWeatherComponent} from './component/daily-weather/daily-weather.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {HourlyComponent} from './hourly/hourly.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'daily', component: DailyWeatherComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'hourly', component: HourlyComponent}
];
