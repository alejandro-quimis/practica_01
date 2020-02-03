import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any = null;
  constructor() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  login(user, userC, password, passwordC, id) {
     if (user === userC && password === passwordC){
      localStorage.setItem('user', JSON.stringify({
        user, password, id
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

