import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-ev-media',
    templateUrl: './ev-media-view.component.html',
    styleUrls: ['./ev-media-view.component.scss'],
})
export class EvMediaViewComponent implements OnInit {
    @Input() public image;

    public coloquent = false;

    public constructor(
        private modalController: ModalController
    ) { }

    public ngOnInit() {
        if (this.image.jsonApiType) {
            this.coloquent = true;
        } else {
            this.coloquent = false;
        }
    }

    public close() {
        this.modalController.dismiss();
    }
}
