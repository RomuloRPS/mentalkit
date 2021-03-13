import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionsEditPage } from './revisions-edit.page';

const routes: Routes = [
    {
        path: '',
        component: RevisionsEditPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RevisionsEditPageRoutingModule {}
