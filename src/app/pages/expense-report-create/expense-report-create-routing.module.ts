import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseReportCreatePage } from './expense-report-create.page';

const routes: Routes = [
    {
        path: '',
        component: ExpenseReportCreatePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpenseReportCreatePageRoutingModule {}
