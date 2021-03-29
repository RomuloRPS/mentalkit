import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportEditPageRoutingModule } from './expense-report-edit-routing.module';

import { ExpenseReportEditPage } from './expense-report-edit.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseReportEditPageRoutingModule
    ],
    declarations: [ExpenseReportEditPage]
})
export class ExpenseReportEditPageModule {}
