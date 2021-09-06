import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    public constructor(
        private router: Router,
    ) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url: string = state.url;

        return this._checkLogin(url);
    }

    private _checkLogin(url: string): boolean {
        // Testa se tem o token jwt local
        return true;
    }

    private _fail() {
        this.router.navigate(['/login']);

        return false;
    }
}
