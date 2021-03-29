import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionsViewPageRoutingModule } from './revisions-view-routing.module';

import { RevisionsViewPage } from './revisions-view.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RevisionsViewPageRoutingModule
    ],
    declarations: [RevisionsViewPage]
})
export class RevisionsViewPageModule {}
