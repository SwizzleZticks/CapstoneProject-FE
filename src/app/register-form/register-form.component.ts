import {Component, inject} from '@angular/core';
import {AccountService} from '../services/account.service';
import {User} from '../interfaces/user';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [],
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
    }

  register(){
    this.accountService.register(this.newUser);
  }
}
