import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrosParametrosPageRoutingModule } from './outros-parametros-routing.module';

import { OutrosParametrosPage } from './outros-parametros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrosParametrosPageRoutingModule
  ],
  declarations: [OutrosParametrosPage]
})
export class OutrosParametrosPageModule {}
