import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EvMediaService {
    private audios = [];
    private images = [];
    private audioOption = false;

    public constructor() {

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
