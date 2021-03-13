import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapsAPILoader } from '@agm/core';

declare let google: any;

@Component({
    selector: 'app-ev-modal-address',
    templateUrl: './ev-modal-address.component.html'
})

export class EvModalAddressComponent {
    public autocompleteItems;
    public autocomplete;

    public latitude: number = 0;
    public longitude: number = 0;
    public geo: any;

    public service;

    public constructor(
        public modalController: ModalController,
        private zone: NgZone,
        private mapsAPILoader: MapsAPILoader,
    ) {
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }

    public dismiss() {
        this.modalController.dismiss();
    }

    public chooseItem(item: any) {
        this.modalController.dismiss(item);
        this.geo = item;
        this.geoCode(this.geo);
    }

    public updateSearch() {
        this.mapsAPILoader.load().then(() => {
            if (this.autocomplete.query == '') {
                this.autocompleteItems = [];

                return;
            }

            let me = this;
            let service = new google.maps.places.AutocompleteService();

            service.getPlacePredictions({
                input: this.autocomplete.query,
                componentRestrictions: {
                    country: 'br'
                }
            }, (predictions, status) => {
                me.autocompleteItems = [];

                me.zone.run(() => {
                    if (predictions != null) {
                        predictions.forEach((prediction) => {
                            me.autocompleteItems.push(prediction.description);
                        });
                    }
                });
            });
        });
    }

    public geoCode(address: any) {
        let geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'address': address }, (results, status) => {
            this.latitude = results[0].geometry.location.lat();
            this.longitude = results[0].geometry.location.lng();
        });
    }
}
