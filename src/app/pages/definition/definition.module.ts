import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinitionPageRoutingModule } from './definition-routing.module';

import { DefinitionPage } from './definition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinitionPageRoutingModule
  ],
  declarations: [DefinitionPage]
})
export class DefinitionPageModule {}
