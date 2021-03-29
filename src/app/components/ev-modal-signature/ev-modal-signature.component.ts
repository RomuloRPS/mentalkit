import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastController, ModalController } from '@ionic/angular';
@Component({
    selector: 'app-ev-modal-signature',
    templateUrl: './ev-modal-signature.component.html',
    styleUrls: ['./ev-modal-signature.component.scss'],
})
export class EvModalSignatureComponent implements OnInit {
    @ViewChild(SignaturePad, {static: false}) public signaturePad: SignaturePad;

    public signature;
    public isDrawing = false;

    public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 305,
        'canvasHeight': 400,
        'backgroundColor': '#f4f5f8',
        'penColor': 'black',
    };

    public constructor(
      private toastController: ToastController,
      private modalController: ModalController
    ) { }

    public ngOnInit() {

    }

    public async savePad() {
        let file = this.signaturePad.toDataURL();

        this.signature = {
            file: file,
            name: 'signature'
        };

        this.close(this.signature);
    }

    public drawComplete() {
        this.isDrawing = false;
    }

    public drawStart() {
        this.isDrawing = true;
    }

    public clear() {
        this.signaturePad.clear();
    }

    public close(signature?) {
        this.signaturePad.clear();
        this.modalController.dismiss(signature);
    }
}
