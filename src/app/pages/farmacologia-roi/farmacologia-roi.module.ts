import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmacologiaRoiPageRoutingModule } from './farmacologia-roi-routing.module';

import { FarmacologiaRoiPage } from './farmacologia-roi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmacologiaRoiPageRoutingModule
  ],
  declarations: [FarmacologiaRoiPage]
})
export class FarmacologiaRoiPageModule {}
