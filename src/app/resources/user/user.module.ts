import { NgModule } from '@angular/core';
import { UserOfflineFilter } from './user.offline.filter';
import { UserOffline } from './user.offline';
import { UserService } from './user.service';
import { UserHttp } from './user.http';

@NgModule({
    providers: [
        UserHttp,
        UserService,
        UserOffline,
        UserOfflineFilter
    ]
})
export class  UserModule { }
