import { NgModule } from '@angular/core';
import { RoleOfflineFilter } from './role.offline.filter';
import { RoleOffline } from './role.offline';
import { RoleService } from './role.service';
import { RoleHttp } from './role.http';

@NgModule({
    providers: [
        RoleHttp,
        RoleService,
        RoleOffline,
        RoleOfflineFilter
    ]
})
export class  RoleModule { }
