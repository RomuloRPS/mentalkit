import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevalenciaPageRoutingModule } from './prevalencia-routing.module';

import { PrevalenciaPage } from './prevalencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevalenciaPageRoutingModule
  ],
  declarations: [PrevalenciaPage]
})
export class PrevalenciaPageModule {}
