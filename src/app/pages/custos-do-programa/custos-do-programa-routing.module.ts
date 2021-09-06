import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustosDoProgramaPage } from './custos-do-programa.page';

const routes: Routes = [
  {
    path: '',
    component: CustosDoProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustosDoProgramaPageRoutingModule {}
