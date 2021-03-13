import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersEditPageRoutingModule } from './users-edit-routing.module';

import { UsersEditPage } from './users-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersEditPageRoutingModule
  ],
  declarations: [UsersEditPage]
})
export class UsersEditPageModule {}
