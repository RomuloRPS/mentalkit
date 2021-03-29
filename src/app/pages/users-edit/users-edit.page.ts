import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { RoleModel } from 'src/app/coloquent-model/role/role.model';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { EvMediaPopoverComponent } from 'src/app/components/ev-media/ev-media-popover/ev-media-popover.component';
import { RoleService } from 'src/app/resources/role/role.service';
import { UserService } from 'src/app/resources/user/user.service';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';

import { environment } from 'src/environments/environment';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.page.html',
    styleUrls: ['./users-edit.page.scss'],
})
export class UsersEditPage implements OnInit {
    @ViewChild('userForm', {static: false}) public userForm: NgForm;
    public user: UserResourceModel;

    public submitted = false;

    public roles: Array<RoleModel>;
    public selectedRoles;
    public passwordParams = {
        password: null,
        confirmation: null
    };

    public editing;

    public constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private modalController: ModalController,
        private roleService: RoleService,
        private popoverController: PopoverController,
        private loadingService: LoadingService,
        private toasterService: ToasterService
    ) { }

    public ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.submitted = false;

            if (params.get('id')) {
                let filters = {
                    id: params.get('id')
                };

                this.userService.onlyOffline().get(filters).subscribe((resp) => {
                    this.user = resp.data[0];
                    this.setRoles(this.user);
                    this.editing = true;
                });
            } else {
                this.user = new UserResourceModel();
                this.editing = false;
            }
        });
    }

    public async openOptions(ev) {
        let items = [];

        if (this.user && this.user.getRelation('avatar')) {
            items.push(this.user.getRelation('avatar'));
        }

        const popoverOptions = {
            component: EvMediaPopoverComponent,
            translucent: true,
            event: ev,
            componentProps: {
                items
            }
        };

        const popover = await this.popoverController.create(popoverOptions);

        popover.onDidDismiss().then((resp: any) => {
            if (resp.data) {
                this.user.setRelation('avatar', resp.data);
            } else {
                this.user.setRelation('avatar', null);
            }
        });

        return await popover.present();
    }

    public setRoles(user) {
        this.roles = user.getRelation('roles');
    }

    public selectChange(event) {
        this.user.elementRelations.roles = event;
    }

    public backToList() {
        this.router.navigate(['usuarios/update' + new Date().toISOString()]);
    }

    public getIconUrl(token): string {
        return `${environment.api}/attachments/${token}/preview`;
    }

    public changePassword() {
        return new Promise(async (resolve, reject) => {
            const modal = await this.modalController.create({
                component: ChangePasswordModalComponent,
                backdropDismiss: true,
                componentProps: {
                    user: this.user
                }
            });

            modal
                .onDidDismiss()
                .then((resp) => {
                    resolve(resp);
                })
                .catch((error) => {
                    reject(error);
                });

            modal.present();
        });
    }

    public hasPasswordInformedAndIsValid(): boolean {
        return (!this.passwordParams.password || !this.passwordParams.confirmation) || this.passwordParams.password == this.passwordParams.confirmation;
    }

    public save(form: NgForm) {
        this.submitted = true;

        if (form.valid && this.verifyEmail()) {
            if(!this.checkRoles()) {
                return;
            }

            this.loadingService.show('Salvando usuário');

            this.user.save().then(() => {
                this.submitted = false;
                this.loadingService.dismiss();
                this.router.navigate(['usuarios/update' + new Date().toISOString()]);
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível salvar as alterações!');
            });
        }
    }

    public create(form: NgForm) {
        this.submitted = true;

        if (form.valid && this.verifyEmail()) {
            if(!this.checkRoles()) {
                return;
            }

            if (!this.hasPasswordInformedAndIsValid()) {
                this.toasterService.warning('As senhas não são iguais');

                return;
            }

            this.user.elements.password = this.passwordParams.password;

            this.loadingService.show('Criando usuário');

            this.user.create().then(() => {
                this.submitted = false;
                this.loadingService.dismiss();
                this.router.navigate(['usuarios/update' + new Date().toISOString()]);
            }).catch((error) => {
                this.loadingService.dismiss();
                this.toasterService.error('Não foi possível criar usuário!');
            });
        }
    }

    public verifyEmail() {
        if (this.user && this.user.getAttribute('email')) {
            return this.user.getAttribute('email').match("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");
        }
    }

    private checkRoles() {
        if (this.user && this.user.getRelation('roles') && this.user.getRelation('roles').length > 0) {
            return true;
        }

        this.toasterService.warning('Informe pelo menos uma permissão de usuário!');

        return false;
    }
}
