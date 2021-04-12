import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionViewPage } from './revisions-view.page';

const routes: Routes = [
    {
        path: '',
        component: RevisionViewPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RevisionViewPageRoutingModule {}
