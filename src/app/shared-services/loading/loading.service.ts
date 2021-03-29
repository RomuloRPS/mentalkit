import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public constructor(private loadingController: LoadingController) { }

    public async show(text) {
        const loading = await this.loadingController.create({
            message: text
        });

        await loading.present();
    }

    public dismiss() {
        this.loadingController.dismiss();
    }
}
