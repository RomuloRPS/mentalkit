import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportCreatePageRoutingModule } from './expense-report-create-routing.module';

import { ExpenseReportCreatePage } from './expense-report-create.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseReportCreatePageRoutingModule
    ],
    declarations: [ExpenseReportCreatePage]
})
export class ExpenseReportCreatePageModule {}
