import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterUserPageRoutingModule } from './register-user-routing.module';
import { RegisterUserPage } from './register-user.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterUserPageRoutingModule,
        BrMaskerModule
    ],
    declarations: [RegisterUserPage]
})
export class RegisterUserPageModule { }
