import { Injectable } from "@angular/core";
import { LoadingController, ModalController } from "@ionic/angular";
import { EvModalLoadingComponent } from "src/app/components/ev-modal-loading/ev-modal-loading.component";
import { ModalLoadingDataService } from './modal-loading-data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class ModalLoadingService {
    public oncloseClicked: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(
        private modalController: ModalController,
        private modalLoadingData: ModalLoadingDataService
    ) {}

    public async show(text, buttonText?, backdropDismiss = true) {
        const modal = await this.modalController.create({
            component: EvModalLoadingComponent,
            cssClass: "loading-modal",
            componentProps: {
                message: text,
                buttonText: buttonText,
            },
            backdropDismiss: backdropDismiss

        });

        modal
            .onDidDismiss()
            .then((resp) => {
                this.oncloseClicked.next(true);

                this.modalLoadingData.reset();
            })
            .catch((error) => {
                this.oncloseClicked.next(true);

                this.modalLoadingData.reset();
            });

        modal.present();
    }

    public success(text) {
        this.modalLoadingData.setSuccess(text);
        this.scheduleDismiss();
    }

    public fail(text) {
        this.modalLoadingData.setFail(text);
        this.scheduleDismiss();
    }

    public warning(text) {
        this.modalLoadingData.setWarning(text);
        this.scheduleDismiss();
    }

    public dismiss() {
        this.modalLoadingData.reset();

        return this.modalController.dismiss();
    }

    private scheduleDismiss() {
        setTimeout(() => {
            this.modalController.getTop().then((modal) => {
                if (modal) {
                    this.modalController.dismiss();
                }
            });
        }, 1500);
    }
}
