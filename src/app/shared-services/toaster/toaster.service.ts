import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToasterService {
    public constructor(private toastController: ToastController) { }

    public async success(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            position: 'top',
            animated: true,
            color: 'success',
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

    public async error(message) {
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

    public async warning(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            position: 'top',
            animated: true,
            color: 'warning',
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
}
