import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmacologiaRoiPage } from './farmacologia-roi.page';

const routes: Routes = [
  {
    path: '',
    component: FarmacologiaRoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmacologiaRoiPageRoutingModule {}
