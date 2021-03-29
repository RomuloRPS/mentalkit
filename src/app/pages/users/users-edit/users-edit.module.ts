import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersEditPageRoutingModule } from './users-edit-routing.module';

import { UsersEditPage } from './users-edit.page';
import { ChangePasswordModalComponent } from './change-password-modal/change-password-modal.component';
import { EvComponentsModule } from 'src/app/components/ev-components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UsersEditPageRoutingModule,
        EvComponentsModule
    ],
    entryComponents: [
        ChangePasswordModalComponent
    ],
    declarations: [UsersEditPage, ChangePasswordModalComponent]
})
export class UsersEditPageModule {}
