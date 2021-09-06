import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmacologiaDescriptionPage } from './farmacologia-description.page';

const routes: Routes = [
  {
    path: '',
    component: FarmacologiaDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmacologiaDescriptionPageRoutingModule {}
