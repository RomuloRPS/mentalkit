import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.page.html',
    styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
    public userData = {
        login: null,
        password: null,
        confirmPassword: null,
        name: null,
        phone: null,
        mail: null
    };

    public passwordType = 'password';
    public passwordIcon = 'eye';

    public confirmPasswordType = 'password';
    public confirmPasswordIcon = 'eye';

    public submitted = false;
    public loading;

    public constructor(
        private router: Router,
    ) { }

    public ngOnInit() {
    }

    public register(form: NgForm) {
        this.loading = true;
        this.submitted = true;

        if (form.valid) {
            this.loading = false;

            this.router.navigate(['register-company']);
        } else {
            this.loading = false;
        }
    }

    public hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    }

    public hideShowConfirmPassword() {
        this.confirmPasswordType = this.confirmPasswordType === 'text' ? 'password' : 'text';
        this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye' ? 'eye-off' : 'eye';
    }

    public toRegisterCompany() {
        this.router.navigate(['register-company']);
    }
}
