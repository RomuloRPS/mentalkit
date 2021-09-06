import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportViewPageRoutingModule } from './expense-report-view-routing.module';

import { ExpenseReportViewPage } from './expense-report-view.page';
import { ExpenseReportPopoverComponent } from './menu-popover/menu-popover.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';
import { EvComponentsModule } from 'src/app/components/ev-components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseReportViewPageRoutingModule,
        PipesModule,
        TranslateModule,
        EvComponentsModule
    ],
    declarations: [ExpenseReportViewPage, ExpenseReportPopoverComponent],
    entryComponents: [
        ExpenseReportPopoverComponent
    ]
})
export class ExpenseReportViewPageModule {}
