import {Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AccountService} from '../services/account.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);
  loggedIn = false;
  isDropdownOpen = false;
  model: any = {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
        this.isDropdownOpen = true;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  logout() {
    this.loggedIn = false;
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
