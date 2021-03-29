import { Injector, Injectable } from '@angular/core';
import { RoleOfflineFilter } from './role.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class RoleOffline extends BaseOffline {
    protected name = 'role';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(RoleOfflineFilter);
    }
}
