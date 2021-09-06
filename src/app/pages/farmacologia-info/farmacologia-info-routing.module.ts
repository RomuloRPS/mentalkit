import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmacologiaInfoPage } from './farmacologia-info.page';

const routes: Routes = [
  {
    path: '',
    component: FarmacologiaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmacologiaInfoPageRoutingModule {}
