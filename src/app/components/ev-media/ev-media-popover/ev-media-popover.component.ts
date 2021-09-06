import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, Platform, LoadingController, PopoverController } from '@ionic/angular';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { EvMediaService } from '../ev-media.service';
import { RecorderService } from '../record.service';
import { HttpClientService } from 'src/app/services/http/http-client.service';
import { environment } from 'src/environments/environment';
import { SingularResponse } from 'coloquent';
import { AvatarModel } from 'src/app/coloquent-model/avatar/avatar.model';
import { LoadingService } from 'src/app/shared-services/loading/loading.service';
import { UserModel } from 'src/app/models/user.model';

@Component({
    selector: 'app-ev-media',
    templateUrl: './ev-media-popover.component.html',
    styleUrls: ['./ev-media-popover.component.scss'],
})
export class EvMediaPopoverComponent implements OnInit {
    @Input() public image;
    @Input() public viewOnly = false;
    @Output() public ImgSelect: EventEmitter<any> = new EventEmitter();

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

    public active = false;
    public toogleCamera = true;
    public idItem;
    public esconder = true;
    public selectedFile: File;
    public filterArray = [];

    public showAttachment = true;

    public constructor(
        public keyboard: Keyboard,
        private camera: Camera,
        private toastController: ToastController,
        private mediaService: EvMediaService,
        private platform: Platform,
        private androidPermissions: AndroidPermissions,
        private rec: RecorderService,
        private loadingController: LoadingController,
        private popoverController: PopoverController,
        private httpService: HttpClientService,
        private loadingService: LoadingService,
        private userModel: UserModel
    ) { }

    public ngOnInit() {
    }

    public viewImage() {
        this.mediaService.openImage(this.image);
    }

    public hasImage() {
        return this.image;
    }

    public keyboardIsOpen() {
        return this.keyboard.isVisible;
    }

    public removeImage() {
        this.popoverController.dismiss('delete');
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
                const itemToSave = {
                    file: this.container.image,
                    name: this.selectedFile.name
                };

                this.popoverController.dismiss(itemToSave);
            }, 500);
        } else {
            if (sizeImg > 5000000) {
                this.presentToast('Selecione uma imagem com até 5 Megabytes de capacidade.');
            } else {
                this.presentToast('Tipo de imagem não suportada: (PNG, JPEG & JPG)');
            }
        }
    }

    public upload(file) {
        let formData = new FormData();

        formData.append("file", file);

        const url = this.bindParams(environment.api + '/tenancies/:tenancy_id/attachments/upload');

        return this.httpService.post(url, formData);
    }

    public bindParams(url: string) {
        let tenancyId;

        this.userModel.load();

        const tenancy = this.userModel.get('selectedTenancyId');

        if (tenancy) {
            tenancyId = tenancy;
        }

        return url.replace(':tenancy_id', tenancyId);
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

        const itemToSave = {
            file: base64Data,
            name: 'imagem.' + type
        };

        this.popoverController.dismiss(itemToSave);
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

    public changeAttachment() {
        this.showAttachment = !this.showAttachment;
    }

    public async presentLoading(text) {
        const loading = await this.loadingController.create({
            message: text
        });

        await loading.present();
    }
}
