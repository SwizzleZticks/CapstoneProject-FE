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
  accountService = inject(AccountService);
  isDropdownOpen = false;
  model: any = {};

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.isDropdownOpen = false;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  logout() {
    this.accountService.logout();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
