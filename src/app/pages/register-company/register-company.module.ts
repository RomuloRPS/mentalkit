import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCompanyPageRoutingModule } from './register-company-routing.module';
import { RegisterCompanyPage } from './register-company.page';
import { EvModalAddressComponent } from './ev-modal-address/ev-modal-address.component';
import { BrMaskerModule } from 'br-mask';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterCompanyPageRoutingModule,
        BrMaskerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCI3kiYCCJM30uxAk5eK8LuVIeN_ic_bZ0',
            libraries: ["places"]
        }),
    ],
    declarations: [RegisterCompanyPage, EvModalAddressComponent],
    entryComponents: [EvModalAddressComponent]
})
export class RegisterCompanyPageModule {}
