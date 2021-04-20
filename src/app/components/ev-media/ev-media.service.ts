import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EvMediaViewComponent } from './ev-media-view/ev-media-view.component';

@Injectable({
    providedIn: 'root'
})

export class EvMediaService {
    private audios = [];
    private images = [];
    private audioOption = false;

    public constructor(private modalController: ModalController) {

    }

    public async openImage(image) {
        const modalPage = await this.modalController.create({
            component: EvMediaViewComponent,
            componentProps: {
                image
            }
        });

        modalPage.onDidDismiss().then((resp: any) => {
            console.log(resp);
        });

        return await modalPage.present();
    }

    public getImages() {
        return this.images;
    }

    public setImages(images) {
        return this.images;
    }

    public getAudios() {
        return this.audios;
    }

    public setAudios(audios) {
        return this.audios;
    }

    public clearMedia() {
        this.audios = [];
        this.images = [];
    }

    public getAudioOption() {
        return this.audioOption;
    }

    public setAudioOption(option) {
        this.audioOption = option;
    }
}
