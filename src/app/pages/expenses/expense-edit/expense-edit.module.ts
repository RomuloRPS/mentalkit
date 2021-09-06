import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseEditPageRoutingModule } from './expense-edit-routing.module';

import { ExpenseEditPage } from './expense-edit.page';
import { SharedServicesModule } from 'src/app/shared-services/shared-services.module';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseEditPageRoutingModule,
        EvComponentsModule,
        PipesModule,
        TranslateModule,
        AgmCoreModule,
    ],
    declarations: [ExpenseEditPage]
})
export class ExpenseEditPageModule {}
