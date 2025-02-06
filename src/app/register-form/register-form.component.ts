import {Component, inject, output} from '@angular/core';
import {AccountService} from '../services/account.service';
import {User} from '../interfaces/user';
import {Location} from '../interfaces/location';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule, NgForOf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  cancelRegister = output<boolean>();

  states: string[] = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  accountService = inject(AccountService);

  public user: User = {locations: [], token: ''};

  public newLocation: Location = {
    city: '',
    state: ''
  };

  addLocation() {
    if (this.newLocation.city && this.newLocation.state) {
      this.user.locations.push(this.newLocation);
      this.newLocation = { city: '', state: '' };
    } else {
      console.log('City and state are required!');
    }
  }

  register(newUser: User){
    this.accountService.register(this.user).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
