import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {

  userName: string;
  password: string;
  errorMessage: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  login(ngForm: NgForm): void {
    if (ngForm && ngForm.valid) {
      this.userName = ngForm.form.value.userName;
      this.password = ngForm.form.value.password;
      this.authService.loginUser(this.userName, this.password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['home']);
      }
    } else {
      this.errorMessage = 'Please enter a username and password';
    }
  }

  cancel(): void {
    this.router.navigate(['home']);
  }
}
