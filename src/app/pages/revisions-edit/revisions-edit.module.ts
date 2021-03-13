import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionsEditPageRoutingModule } from './revisions-edit-routing.module';

import { RevisionsEditPage } from './revisions-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionsEditPageRoutingModule
  ],
  declarations: [RevisionsEditPage]
})
export class RevisionsEditPageModule {}
