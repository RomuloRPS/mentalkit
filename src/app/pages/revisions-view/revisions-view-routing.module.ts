import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionsViewPage } from './revisions-view.page';

const routes: Routes = [
    {
        path: '',
        component: RevisionsViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RevisionsViewPageRoutingModule {}
