import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersCreatePage } from './users-create.page';

const routes: Routes = [
  {
    path: '',
    component: UsersCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersCreatePageRoutingModule {}
