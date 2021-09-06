import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacologiaPageRoutingModule } from './farmacologia-routing.module';

import { FarmacologiaPage } from './farmacologia.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FarmacologiaPageRoutingModule,
        TranslateModule
    ],
    declarations: [FarmacologiaPage]
})
export class FarmacologiaPageModule {}
