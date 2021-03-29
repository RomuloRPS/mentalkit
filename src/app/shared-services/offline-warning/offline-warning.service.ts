import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvModalOfflineComponent } from 'src/app/components/ev-modal-offline/ev-modal-offline.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OfflineWarningService {
    public oncloseClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(private modalController: ModalController) { }

    public async show() {
        const modal = await this.modalController.create({
            component: EvModalOfflineComponent,
            cssClass: 'offline-modal'
        });

        modal.onDidDismiss().then((resp) => {
            this.oncloseClicked.next(true);
            this.oncloseClicked = new BehaviorSubject(false);
        }).catch((error) => {
            this.oncloseClicked.next(true);
            this.oncloseClicked = new BehaviorSubject(false);
        });

        return await modal.present();
    }

    public dismiss() {
        this.modalController.dismiss();
    }
}
