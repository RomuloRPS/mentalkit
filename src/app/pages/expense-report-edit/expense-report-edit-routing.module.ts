import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseReportEditPage } from './expense-report-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseReportEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseReportEditPageRoutingModule {}
