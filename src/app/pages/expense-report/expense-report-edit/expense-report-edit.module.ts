import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseReportEditPageRoutingModule } from './expense-report-edit-routing.module';

import { ExpenseReportEditPage } from './expense-report-edit.page';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseReportEditPageRoutingModule,
        EvComponentsModule,
        PipesModule,
        TranslateModule
    ],
    declarations: [ExpenseReportEditPage]
})
export class ExpenseReportEditPageModule {}
