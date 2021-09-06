import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/shared-services/auth.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { Resource } from 'coloquent/dist/Resource';
import { UserModel } from 'src/app/models/user.model';
import { PluralResponse, SingularResponse } from 'coloquent';
import { RoleService } from 'src/app/services/role/role.service';
import { OfflineCacheService } from 'src/app/shared-services/offline-cache.service';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

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
        private statusBar: StatusBar,
        private authService: AuthService,
        private toasterService: ToasterService,
        private userModel: UserModel,
        private roleService: RoleService,
        private offlineCacheSercice: OfflineCacheService,
        private googlePlus: GooglePlus
    ) {
        this.version = environment.version;
    }

    public ngOnInit() {
        this.statusBar.backgroundColorByHexString('#6C9F23');
    }

    public loginWithGoogle() {
        this.googlePlus.login({
            'scopes': 'profile, email', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
		    'webClientId': '886871057560-t722145pt0j9oiuttt9si6ecnobmnori.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        }).then((resp) => {
            console.log(resp);
            alert(JSON.stringify(resp));
        }).catch((error) => {
            console.log(error);
            alert(error);
        });
    }

    public onLogin(form: NgForm) {
        this.loading = true;

        if (form.valid) {
            this.userData.email = this.userData.login;
            this.route.navigate(['menu']).then(resp => {
                console.log(resp);
            }).catch((error) => {
                console.log(error);
            });

            // this.authService.login(this.userData).then((response: any) => {
            //     if (response && response.data) {
            //         const userResource = new SingularResponse(
            //             UserResourceModel.query().getQuery(),
            //             null,
            //             UserResourceModel,
            //             response
            //         ).getData();

            //         this.saveUserParams(userResource, response);

            //         this.offlineCacheSercice.cacheInfo().toPromise().then((resp) => {
            //             this.loading = false;

            //         }).catch((error) => {
            //             this.loading = false;
            //             this.toasterService.error('Usuário ou senha inválidos!');
            //         });
            //     }
            // }).catch((error) => {
            //     console.log(error);
            //     this.loading = false;
            //     this.toasterService.error('Usuário ou senha inválidos!');
            // });
        } else {
            this.submitted = true;
            this.loading = false;
        }
    }

    public setAuthenticatedUser(user: Resource) {
        localStorage.setItem('login', JSON.stringify(user));
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

    private saveUserParams(user, resp) {
        localStorage.setItem('JWT', user.getAttribute('token'));
        localStorage.setItem('selectedTenancyId', user.getRelation('tenancies')[0].getApiId());

        this.userModel
            .set("id", user.getApiId())
            .set("JWT", user.getAttribute('token'))
            .set("username", user.getAttribute('username'))
            .set("name", user.getAttribute('name'))
            .set("email", user.getAttribute('email'))
            .set("user", JSON.stringify(resp))
            .set("selectedTenancyId", user.getRelation('tenancies')[0].getApiId())
            .save();

        this.roleService.updateRoles();
    }
}
