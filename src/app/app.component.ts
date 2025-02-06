import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DailyWeatherComponent } from "./component/daily-weather/daily-weather.component";
import { HttpClient } from '@angular/common/http';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, DailyWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  private accountService = inject(AccountService);
  title = 'Capstone Weather';
  users: any;

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser()
  }

  setCurrentUser(){
    const userString = localStorage.getItem("user");
    if (!userString) {
      return;
    }
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  getUsers(){
    this.http.get('http://localhost:5001/api/User').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
}
