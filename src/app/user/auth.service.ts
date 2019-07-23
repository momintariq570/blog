import { Injectable } from '@angular/core';
import { User } from './user';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;
  redirectUrl: string;

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

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
