import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EvModalAddressComponent } from './ev-modal-address/ev-modal-address.component';

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.page.html',
    styleUrls: ['./register-company.page.scss'],
})

export class RegisterCompanyPage implements OnInit {
    public companyData = {
        name: null,
        phone: null,
        address: null,
        document: null
    };

    public loading = false;

    public submitted;

    public constructor(
        private router: Router,
        private modalController: ModalController
    ) { }

    public ngOnInit() { }

    public toMenu() {
        this.router.navigate(['tablinks/menu']);
    }

    public register(form) {
        this.submitted = true;
    }

    public async showAddressModal() {
        const modal = await this.modalController.create({
            component: EvModalAddressComponent
        });

        modal.onDidDismiss().then((resp) => {
            if(resp.data) {
                this.companyData.address = resp.data;
            }
        });

        return await modal.present();
    }
}
