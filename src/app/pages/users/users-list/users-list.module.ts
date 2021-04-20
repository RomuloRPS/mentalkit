import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersListPageRoutingModule } from './users-list-routing.module';

import { UsersListPage } from './users-list.page';
import { EvComponentsModule } from 'src/app/components/ev-components';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UsersListPageRoutingModule,
        EvComponentsModule,
        PipesModule,
        TranslateModule
    ],
    declarations: [UsersListPage]
})
export class UsersListPageModule {}
