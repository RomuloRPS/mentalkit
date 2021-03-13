import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseAddToExpenseReportPage } from './expense-add-to-expense-report.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseAddToExpenseReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseAddToExpenseReportPageRoutingModule {}
