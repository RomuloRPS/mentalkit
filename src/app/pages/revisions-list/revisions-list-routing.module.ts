import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionsListPage } from './revisions-list.page';

const routes: Routes = [
    {
        path: '',
        component: RevisionsListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RevisionsListPageRoutingModule {}
