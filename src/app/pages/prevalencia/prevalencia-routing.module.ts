import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevalenciaPage } from './prevalencia.page';

const routes: Routes = [
  {
    path: '',
    component: PrevalenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevalenciaPageRoutingModule {}
