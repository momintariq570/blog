import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float:right; color: #E05C65; padding-left: 10px; }
  `]
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(profileForm: FormGroup): void {
    if (this.profileForm.valid) {
      const firstName = profileForm.value.firstName;
      const lastName = profileForm.value.lastName;
      this.authService.updateCurrentUser(firstName, lastName);
      this.router.navigate(['home']);
    }
  }

  cancel(): void {
    this.router.navigate(['home']);
  }

  validateFirstName(): boolean {
    return this.profileForm.controls.firstName.valid;
  }

  validateLastName(): boolean {
    return this.profileForm.controls.lastName.valid;
  }
}
