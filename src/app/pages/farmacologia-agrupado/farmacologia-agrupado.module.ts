import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacologiaAgrupadoPageRoutingModule } from './farmacologia-agrupado-routing.module';

import { FarmacologiaAgrupadoPage } from './farmacologia-agrupado.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FarmacologiaAgrupadoPageRoutingModule,
        TranslateModule
    ],
    declarations: [FarmacologiaAgrupadoPage]
})
export class FarmacologiaAgrupadoPageModule {}
