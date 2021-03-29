import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-ev-modal-app-version',
    templateUrl: './ev-modal-app-version.component.html',
    styleUrls: ['./ev-modal-app-version.component.scss'],
})
export class EvModalAppVersionComponent implements OnInit {
    @Input() public blocked = false;

    public constructor(
      public platform: Platform,
    ) { }

    public ngOnInit() {}

    public getLogo() {
        if(this.platform.is("ios")){
            return "logo-apple-appstore";
        } else {
            return "logo-google-playstore";
        }
    }

    public toStore() {
        if (this.platform.is("ios")) {
            window.open("https://apps.apple.com/br/app/eloverde-motorista/id1530444596", '_self');
        } else {
            window.open("https://play.google.com/store/apps/details?id=br.com.eloverde.recycler", '_self');
        }
    }
}
