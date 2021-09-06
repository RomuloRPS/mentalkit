import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutrosParametrosPage } from './outros-parametros.page';

const routes: Routes = [
  {
    path: '',
    component: OutrosParametrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutrosParametrosPageRoutingModule {}
