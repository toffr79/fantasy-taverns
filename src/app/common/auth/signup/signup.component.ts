import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent {
    userName = '';
    password = '';

    constructor(private router: Router, private authService: AuthService) {}

    signup(): void {
        console.log('Username: ' + this.userName + ', Password: ' + this.password);
    }

    cancel(): void {
        this.router.navigateByUrl('/login');
    }
}