import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacologiaInfoPageRoutingModule } from './farmacologia-info-routing.module';

import { FarmacologiaInfoPage } from './farmacologia-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmacologiaInfoPageRoutingModule
  ],
  declarations: [FarmacologiaInfoPage]
})
export class FarmacologiaInfoPageModule {}
