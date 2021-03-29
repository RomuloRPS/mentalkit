import { Injectable } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { EvModalSignatureComponent } from 'src/app/components/ev-modal-signature/ev-modal-signature.component';

@Injectable({
    providedIn: "root",
})
export class ModalSignatureService {
    public constructor(
        private modalController: ModalController,
    ) {}

    public async show() {
        return new Promise(async (resolve, reject) => {
            const modal = await this.modalController.create({
                component: EvModalSignatureComponent,
                backdropDismiss: true

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

    public dismiss() {
        return this.modalController.dismiss();
    }
}
