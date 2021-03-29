import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    public constructor(private alertController: AlertController) { }

    public async confirm(title, message) {
        return new Promise(async (resolve, reject) => {
            const alert = await this.alertController.create({
                header: title,
                message: message,
                buttons: [
                    {
                        text: 'Não',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            reject();
                        }
                    }, {
                        text: 'Sim',
                        handler: () => {
                            resolve();
                        }
                    }
                ]
            });

            return await alert.present();
        });
    }

    public async ok(title, message) {
        return new Promise(async (resolve, reject) => {
            const alert = await this.alertController.create({
                header: title,
                message: message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            resolve();
                        }
                    }
                ]
            });

            return await alert.present();
        });
    }
}
