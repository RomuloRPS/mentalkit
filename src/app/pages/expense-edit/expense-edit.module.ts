import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseEditPageRoutingModule } from './expense-edit-routing.module';

import { ExpenseEditPage } from './expense-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseEditPageRoutingModule
  ],
  declarations: [ExpenseEditPage]
})
export class ExpenseEditPageModule {}
