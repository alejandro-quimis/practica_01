import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = null;
  constructor() { }

  login(user, userC, password, passwordC) {
     if (user === userC && password === passwordC){
      localStorage.setItem('user', JSON.stringify({
        user, password
      }));
      return true;
     }
  }

  geUserLogin() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      return this.user;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

}

