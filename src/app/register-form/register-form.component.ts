import {Component, inject} from '@angular/core';
import {AccountService} from '../services/account.service';
import {User} from '../interfaces/user';
import {Location} from '../interfaces/location';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  accountService = inject(AccountService);

  public newUser: User = {
      username:  '',
      password:  '',
      firstName: '',
      lastName:  '',
      email:     '',
      locations: [],
      token:     ''
  };

  public newLocation: Location = {
    city: '',
    state: ''
  };

  register(newUser: User){
    this.accountService.register(this.newUser);
  }
}
