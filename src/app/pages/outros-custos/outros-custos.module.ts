import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutrosCustosPageRoutingModule } from './outros-custos-routing.module';

import { OutrosCustosPage } from './outros-custos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutrosCustosPageRoutingModule
  ],
  declarations: [OutrosCustosPage]
})
export class OutrosCustosPageModule {}
