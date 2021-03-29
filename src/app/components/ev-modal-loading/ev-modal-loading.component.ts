import { Component, OnInit } from '@angular/core';
import { ModalLoadingService } from 'src/app/shared-services/modal-loading/modal-loading.service';
import { ModalLoadingDataService } from 'src/app/shared-services/modal-loading/modal-loading-data.service';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-ev-modal-loading',
    templateUrl: './ev-modal-loading.component.html',
    styleUrls: ['./ev-modal-loading.component.scss'],
})

export class EvModalLoadingComponent implements OnInit {
    public message;
    public buttonText;

    public constructor(
        public modalLoadingData: ModalLoadingDataService,
        private modalController: ModalController
    ) { }

    public ngOnInit() {}

    public close() {
        this.modalController.dismiss();
    }
}
