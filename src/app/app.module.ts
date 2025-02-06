import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './services/account.service';
import {HomeComponent} from './home/home.component';  // Import your component

@NgModule({
  declarations: [],
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HourlyComponent,
    DailyWeatherComponent,
    RegisterFormComponent,
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
  providers: [AccountService]
})
export class AppModule {

}
