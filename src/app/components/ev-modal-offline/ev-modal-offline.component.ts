import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-ev-modal-offline',
    templateUrl: './ev-modal-offline.component.html',
    styleUrls: ['./ev-modal-offline.component.scss'],
})
export class EvModalOfflineComponent implements OnInit {
    public constructor(private modalController: ModalController) { }

    public ngOnInit() {}

    public close() {
        this.modalController.dismiss();
    }
}
