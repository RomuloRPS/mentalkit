import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseReportListPage } from './expense-report-list.page';

const routes: Routes = [
    {
        path: '',
        component: ExpenseReportListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpenseReportListPageRoutingModule {}
