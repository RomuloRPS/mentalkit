import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvModalAppVersionComponent } from 'src/app/components/ev-modal-app-version/ev-modal-app-version.component';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppInfoService {
    public constructor(private modalController: ModalController, private httpClient: HttpClient) { }

    public async show(blocked) {
        const modal = await this.modalController.create({
            component: EvModalAppVersionComponent,
            cssClass: 'small-modal',
            backdropDismiss: !blocked,
            componentProps: {
                blocked: blocked
            }
        });

        return await modal.present();
    }

    public dismiss() {
        this.modalController.dismiss();
    }

    public checkInfo() {
        return this.httpClient.get(environment.api + "/app-info?app=elorecycler").toPromise();
    }
}
