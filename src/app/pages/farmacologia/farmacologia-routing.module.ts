import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmacologiaPage } from './farmacologia.page';

const routes: Routes = [
  {
    path: '',
    component: FarmacologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmacologiaPageRoutingModule {}
