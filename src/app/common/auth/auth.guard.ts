import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of, Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
        const isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }
        return of(isAuthenticated);
    }
}
