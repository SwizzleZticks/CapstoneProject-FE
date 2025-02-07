import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { NgClass } from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, NgClass, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  accountService = inject(AccountService);
  isDropdownOpen = false;
  user: any = {};

  constructor(private router: Router) {}

  login(){
    this.accountService.login(this.user).subscribe({
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
    this.router.navigate(['/home']);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
