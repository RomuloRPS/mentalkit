import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseListPageRoutingModule } from './expense-list-routing.module';

import { ExpenseListPage } from './expense-list.page';
import { ExpenseListPopoverComponent } from './expense-list-popover/expense-list-popover.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpenseListPageRoutingModule
    ],
    declarations: [ExpenseListPage, ExpenseListPopoverComponent],
    entryComponents: [ExpenseListPopoverComponent]
})
export class ExpenseListPageModule {}
