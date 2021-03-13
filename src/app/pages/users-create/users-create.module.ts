import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersCreatePageRoutingModule } from './users-create-routing.module';

import { UsersCreatePage } from './users-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersCreatePageRoutingModule
  ],
  declarations: [UsersCreatePage]
})
export class UsersCreatePageModule {}
