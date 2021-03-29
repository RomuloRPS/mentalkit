import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-ev-modal-elo-document-viewer',
    templateUrl: './ev-modal-elo-document-viewer.component.html',
    styleUrls: ['./ev-modal-elo-document-viewer.component.scss'],
})
export class EvModalEloDocumentViewerComponent implements OnInit {
    @Input() public url;
    public loading = true;

    public constructor(private modalController: ModalController) { }

    public ngOnInit() {}

    public close() {
        this.modalController.dismiss();
    }

    public onLoad() {
        console.log('loaded');
        this.loading = false;
    }
}
