import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionListPageRoutingModule } from './revisions-list-routing.module';
import { RevisionListPage } from './revisions-list.page';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RevisionListPageRoutingModule,
        EvComponentsModule,
        PipesModule,
        FormsModule,
        TranslateModule
    ],
    declarations: [RevisionListPage]
})
export class RevisionsListPageModule {}
