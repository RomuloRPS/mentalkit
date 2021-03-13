import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionsExpenseViewPageRoutingModule } from './revisions-expense-view-routing.module';

import { RevisionsExpenseViewPage } from './revisions-expense-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionsExpenseViewPageRoutingModule
  ],
  declarations: [RevisionsExpenseViewPage]
})
export class RevisionsExpenseViewPageModule {}
