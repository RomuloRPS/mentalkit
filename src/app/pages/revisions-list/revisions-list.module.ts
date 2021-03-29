import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionsListPageRoutingModule } from './revisions-list-routing.module';

import { RevisionsListPage } from './revisions-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RevisionsListPageRoutingModule
    ],
    declarations: [RevisionsListPage]
})
export class RevisionsListPageModule {}
