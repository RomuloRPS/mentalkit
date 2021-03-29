import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LogoutService {
    public constructor() {}

    public logout() {
        this.clearStorage();

        this.redirectToLogin();
    }

    private redirectToLogin() {
        setTimeout(() => {
            document.location.href = '/login';
        }, 100);
    }

    private clearStorage() {
        localStorage.removeItem('JWT');
        localStorage.removeItem('user');
    }
}
