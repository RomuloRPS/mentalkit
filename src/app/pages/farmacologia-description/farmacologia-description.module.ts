import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacologiaDescriptionPageRoutingModule } from './farmacologia-description-routing.module';

import { FarmacologiaDescriptionPage } from './farmacologia-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmacologiaDescriptionPageRoutingModule
  ],
  declarations: [FarmacologiaDescriptionPage]
})
export class FarmacologiaDescriptionPageModule {}
