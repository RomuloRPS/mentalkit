import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersEditPage } from './users-edit.page';

const routes: Routes = [
    {
        path: '',
        component: UsersEditPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersEditPageRoutingModule {}
