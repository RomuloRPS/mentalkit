import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrosCustosPage } from './outros-custos.page';

const routes: Routes = [
  {
    path: '',
    component: OutrosCustosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrosCustosPageRoutingModule {}
