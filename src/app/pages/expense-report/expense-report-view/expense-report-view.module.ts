import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportViewPageRoutingModule } from './expense-report-view-routing.module';

import { ExpenseReportViewPage } from './expense-report-view.page';
import { ExpenseReportPopoverComponent } from './menu-popover/menu-popover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseReportViewPageRoutingModule
    ],
    declarations: [ExpenseReportViewPage, ExpenseReportPopoverComponent],
    entryComponents: [
        ExpenseReportPopoverComponent
    ]
})
export class ExpenseReportViewPageModule {}
