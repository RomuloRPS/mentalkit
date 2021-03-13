import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public userData = { login: '', password: '', email: '' };
    public submitted = false;

    public passwordType = 'password';
    public passwordIcon = 'eye';

    public loading = false;
    public version;

    public constructor(
        private route: Router,
        private alertController: AlertController,
        private toastController: ToastController,
        private barcodeScanner: BarcodeScanner,
        private statusBar: StatusBar

    ) {
        this.version = environment.version;
    }

    public ngOnInit() {
        this.statusBar.backgroundColorByHexString('#6C9F23');
    }

    public onLogin(form: NgForm) {
        this.loading = true;

        if (form.valid) {
            this.userData.email = this.userData.login;

            if (this.userData.login == 'revisador') {
                localStorage.setItem('user', 'revisador');
            } else if (this.userData.login == 'admin') {
                localStorage.setItem('user', 'admin');
            } else {
                localStorage.setItem('user', 'normal');
            }

            if (!window.navigator.onLine) {
                this.loading = false;
                this.loginFailed('Sem conexão com internet!');

                return;
            }

            this.loading = false;
            setTimeout(() => {
                localStorage.setItem('JWT', 'batata');
                this.route.navigate(['/']);
            }, 2000);
        } else {
            this.submitted = true;
            this.loading = false;
        }
    }

    public hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
    }

    public async loginFailed(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            position: 'top',
            animated: true,
            color: 'danger',
            mode: 'ios',
            buttons: [
                {
                    side: 'end',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                        console.log('close clicked');
                    }
                }
            ]

        });

        toast.present();
    }

    public register() {
        this.route.navigate(['register-user']);
    }

    public forgotPassword() {
        this.route.navigate(['forgot-password']);
    }
}
