import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportListPageRoutingModule } from './expense-report-list-routing.module';
import { ExpenseReportListPage } from './expense-report-list.page';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ExpenseReportListPageRoutingModule,
        EvComponentsModule,
        PipesModule,
        FormsModule
    ],
    declarations: [ExpenseReportListPage]
})
export class ExpenseReportListPageModule {}
