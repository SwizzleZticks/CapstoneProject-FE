import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../interfaces/user';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:5001/api/';

  currentUser = signal<User | null>(null);
  newUser = signal<User | null>(null);

  login(model: any){
    return this.http.post<User>(this.baseUrl + 'Account/login', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUser.set(null);
  }

  register(user: User){
    this.http.post<User>(this.baseUrl + 'Account/register', user).subscribe(
      (response) => {
        this.newUser.set(user);
      }
    )
  }
}
