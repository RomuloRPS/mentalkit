import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseReportViewPage } from './expense-report-view.page';

const routes: Routes = [
    {
        path: '',
        component: ExpenseReportViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpenseReportViewPageRoutingModule {}
