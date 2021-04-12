import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseViewPageRoutingModule } from './expense-view-routing.module';

import { ExpenseViewPage } from './expense-view.page';
import { SharedServicesModule } from 'src/app/shared-services/shared-services.module';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseViewPageRoutingModule,
        EvComponentsModule,
        PipesModule
    ],
    declarations: [ExpenseViewPage]
})
export class ExpenseViewPageModule {}
