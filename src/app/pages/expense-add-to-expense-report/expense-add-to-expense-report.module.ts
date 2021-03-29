import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseAddToExpenseReportPageRoutingModule } from './expense-add-to-expense-report-routing.module';

import { ExpenseAddToExpenseReportPage } from './expense-add-to-expense-report.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseAddToExpenseReportPageRoutingModule
    ],
    declarations: [ExpenseAddToExpenseReportPage]
})
export class ExpenseAddToExpenseReportPageModule {}
