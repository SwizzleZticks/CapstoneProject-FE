import {Component, inject, OnInit} from '@angular/core';
import {RegisterFormComponent} from '../register-form/register-form.component';
import {HttpClient} from '@angular/common/http';
import {AccountService} from '../services/account.service';

@Component({
  selector: 'app-home',
  imports: [
    RegisterFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  http = inject(HttpClient);
  registerMode = false;
  users: any;

  ngOnInit() {
    this.getUsers();
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  getUsers(){
    this.http.get('http://localhost:5001/api/User').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
}
