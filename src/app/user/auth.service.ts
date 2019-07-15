import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Momin',
      lastName: 'Tariq'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
