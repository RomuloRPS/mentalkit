import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustosDoProgramaPageRoutingModule } from './custos-do-programa-routing.module';

import { CustosDoProgramaPage } from './custos-do-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustosDoProgramaPageRoutingModule
  ],
  declarations: [CustosDoProgramaPage]
})
export class CustosDoProgramaPageModule {}
