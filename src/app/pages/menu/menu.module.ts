import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { MenuPopoverComponent } from './menu-popover/menu-popover.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MenuPageRoutingModule,
        PipesModule,
        TranslateModule
    ],
    entryComponents: [MenuPopoverComponent],
    declarations: [MenuPage, MenuPopoverComponent]
})
export class MenuPageModule { }
