import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportListPageRoutingModule } from './expense-report-list-routing.module';
import { ExpenseReportListPage } from './expense-report-list.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ExpenseReportListPageRoutingModule
    ],
    declarations: [ExpenseReportListPage]
})
export class ExpenseReportListPageModule {}
