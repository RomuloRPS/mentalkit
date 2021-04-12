import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionListPage } from './revisions-list.page';

const routes: Routes = [
    {
        path: '',
        component: RevisionListPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RevisionListPageRoutingModule {}
