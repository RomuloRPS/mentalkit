import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { UserResourceModel } from 'src/app/coloquent-model/user/user.model';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { ToasterService } from 'src/app/shared-services/toaster/toaster.service';

@Component({
    selector: 'app-ev-modal-offline',
    templateUrl: './change-password-modal.component.html',
    styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent implements OnInit {
    @Input() public user: UserResourceModel;

    public password = '';
    public confirmation = '';

    public constructor(
        private modalController: ModalController,
        private loadingService: LoadingService,
        private toasterService: ToasterService,
        private translateService: TranslateService
    ) { }

    public ngOnInit() {}

    public hasPasswordInformedAndIsValid(): boolean {
        return !!this.confirmation && !!this.password;
    }

    public passwordIsEqual() {
        if (this.password == this.confirmation){
            return true;
        } else {
            this.toasterService.error(this.translateService.instant('DIFF_PASSWORD'));
        }
    }

    public save() {
        const password = {
            password: this.password,
            confirmation: this.confirmation
        };

        if (this.passwordIsEqual()) {
            this.loadingService.show('Alterando senha');

            this.user.updatePassword(password).then(() => {
                this.toasterService.success(this.translateService.instant('PASSWORD_UPDATE'));
                this.loadingService.dismiss();
                this.close();
            }).catch((error) => {
                setTimeout(() => {
                    this.loadingService.dismiss();
                    this.toasterService.error(this.translateService.instant('PASSWORD_UPDATE_FAILED'));
                }, 200);
            });
        }
    }

    public close() {
        this.modalController.dismiss();
    }
}
