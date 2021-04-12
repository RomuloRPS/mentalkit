import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseViewPage } from './expense-view.page';

const routes: Routes = [
    {
        path: '',
        component: ExpenseViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpenseViewPageRoutingModule {}
