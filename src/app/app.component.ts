import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import {FormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, NavComponent, RouterOutlet, HomeComponent,]
})
export class AppComponent implements OnInit {
  private accountService = inject(AccountService);

  ngOnInit() {
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

}
