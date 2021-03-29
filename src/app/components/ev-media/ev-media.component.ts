import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { EvMediaService } from './ev-media.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { RecorderService } from './record.service';

@Component({
    selector: 'app-ev-media',
    templateUrl: './ev-media.component.html',
    styleUrls: ['./ev-media.component.scss'],
})
export class EvMediaComponent implements OnInit {
    @Input() public galeryDisabled;
    @Input() public pathImage: File;
    @Output() public ImgSelect: EventEmitter<any> = new EventEmitter();
    @Output() public AudioSelect: EventEmitter<any> = new EventEmitter();

    public resource = {
        avatar: null
    };

    public container = {
        image: null,
        type: null
    };

    public appState = {
        takingPicture: true,
        imageUri: ''
    };

    public images = [];

    public active = false;
    public image: any;
    public toogleCamera = true;
    public idItem;
    public esconder = true;
    public selectedFile: File;
    public filterArray = [];

    public audioOption = false;
    public audios = [];
    public showAttachment = true;
    public items = [];

    // audios
    public second = 0;
    public minute = 0;
    public setInter;

    public heightContnetAudio;
    public first = 0;

    public maxAudio = 2;
    public recording = false;

    public audioFiles = [];
    public audioCollection = [];
    public playOrStop = false;
    public hideOrShow = false;

    public constructor(
        public keyboard: Keyboard,
        private camera: Camera,
        private toastController: ToastController,
        private mediaService: EvMediaService,
        private platform: Platform,
        private androidPermissions: AndroidPermissions,
        private rec: RecorderService,
        private loadingController: LoadingController
    ) { }

    public ngOnInit() {
    }

    public keyboardIsOpen() {
        return this.keyboard.isVisible;
    }

    public uploadImage(event?) {
        if (typeof event === 'string') {
            this.verifyBase64String(event);

            return;
        }

        this.selectedFile = event.target.files[0] as File;

        const sizeImg = this.selectedFile.size;

        if (
            (
                this.selectedFile.type.includes('jpeg') ||
                this.selectedFile.type.includes('png') ||
                this.selectedFile.type.includes('jpg')
            ) && sizeImg <= 5000000
        ) {
            // this.loader.show();

            // show image
            const fReader = new FileReader();

            fReader.onload = e => this.container.image = fReader.result;

            fReader.readAsDataURL(this.selectedFile);

            setTimeout(() => {
                this.items = this.mediaService.getImages();

                const itemToSave = {
                    file: this.container.image,
                    name: this.selectedFile.name
                };

                this.items.push(itemToSave);

                this.ImgSelect.emit(this.items);
                this.mediaService.setImages(this.items);
            }, 500);
        } else {
            if (sizeImg > 5000000) {
                this.presentToast('Selecione uma imagem com até 5 Megabytes de capacidade.');
            } else {
                this.presentToast('Tipo de imagem não suportada: (PNG, JPEG & JPG)');
            }
        }
    }

    public fillFilterArray(value) {
        let aux = 0;

        if (this.filterArray.length < 1) {
            this.filterArray.push(value);
        } else {
            this.filterArray.push(value);
        }

        this.idItem = null;
    }

    public getPathImage(event) {
        this.uploadImage(event);
    }

    public cameraCapture() {
        this.presentLoading('Aguardando câmera');

        const options: CameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            correctOrientation: true,
            saveToPhotoAlbum: false,
            cameraDirection: this.camera.Direction.BACK
        };

        document.addEventListener('deviceready', () => {
            this.camera.getPicture(options).then((imageData) => {
                this.loadingController.dismiss();

                const base64Image = 'data:image/jpeg;base64,' + imageData;

                this.verifyBase64String(base64Image);
            }, (err) => {
                this.loadingController.dismiss();
            });
        });
    }

    public verifyBase64String(base64Data) {
        let type = null;

        if (base64Data.includes('jpeg')) {
            type = base64Data.substr(11, 4);
        } else {
            type = base64Data.substr(11, 3);
        }

        this.items = this.mediaService.getImages();

        const itemToSave = {
            file: base64Data,
            name: 'imagem.' + type
        };

        this.items.push(itemToSave);
        this.ImgSelect.emit(this.items);
        this.mediaService.setImages(this.items);
    }

    public async presentToast(message) {
        const toast = await this.toastController.create({
            message,
            duration: 2000,
            color: 'danger',
            mode: 'ios',
            position: 'top',
        });

        toast.present();
    }

    public micOn() {
        this.mediaService.setAudioOption(true);
    }

    public onAudioRecorded(event) {
        this.audioOption = false;
        this.AudioSelect.emit(event);
    }

    public removeImage(index) {
        this.items.splice(index, 1);
    }

    public changeAttachment() {
        this.showAttachment = !this.showAttachment;
    }

    public getAudioOption() {
        return this.mediaService.getAudioOption();
    }

    public stop() {
        clearInterval(this.setInter);
        this.hideOrShow = false;
        this.minute = 0;
        this.second = 0;
        this.audioFiles = this.mediaService.getAudios();
        this.rec.stop().subscribe((newAudio) => {
            this.recording = false;

            if (newAudio.file !== 'data:audio/x-m4a;base64,') {
                this.audioFiles.push(newAudio);
                this.mediaService.setAudios(this.audioFiles);
                this.mediaService.setAudioOption(false);
                this.AudioSelect.emit(this.audioFiles);
            }
        });
    }

    public record() {
        if (this.recording) {
            return;
        }

        this.minute = 0;
        this.second = 0;

        let permiss = false;

        if (this.platform.is('android')) {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
                result => {
                    permiss = result.hasPermission;

                    if (permiss) {
                        this.executeRecord();
                    } else {
                        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(resp => resp);
                    }
                },
                err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
            );
        } else {
            this.executeRecord();
        }
    }

    public executeRecord() {
        this.hideOrShow = true;
        this.minute = 0;
        this.second = 0;

        if (this.recording) {
            this.stop();

            return;
        }

        this.recording = true;

        this.setInter = setInterval(() => {
            this.second++;

            if (this.second > 59) {
                this.minute++;
                this.second = 0;
            }
        }, 1000);

        this.rec.record();
    }

    public setMaxAudio(num) {
        this.maxAudio = num;
    }

    public async presentLoading(text) {
        const loading = await this.loadingController.create({
            message: text
        });

        await loading.present();
    }
}
