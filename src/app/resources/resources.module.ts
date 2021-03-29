import { BaseResourceHttp } from './base-resource.http';
import { NgModule } from '@angular/core';
import { BaseOffline } from './base.offline';
import { StorageUtil } from './storage.util';
import { GenericCollectionModel } from './generic-collection.model';
import { HttpUtil } from './http.util';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        UserModule,
        RoleModule
    ],
    providers: [
        StorageUtil,
        GenericCollectionModel,
        HttpUtil
    ],
    exports: [
    ],
    bootstrap: []
})
export class ResourcesModule { }
