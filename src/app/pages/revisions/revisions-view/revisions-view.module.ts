import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionViewPageRoutingModule } from './revisions-view-routing.module';

import { RevisionViewPage } from './revisions-view.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RevisionViewPageRoutingModule,
        PipesModule,
        TranslateModule
    ],
    declarations: [RevisionViewPage],
})
export class RevisionViewPageModule {}
