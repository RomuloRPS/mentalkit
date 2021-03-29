import { Injector, Injectable } from '@angular/core';
import { UserOfflineFilter } from './user.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class UserOffline extends BaseOffline {
    protected name = 'user';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(UserOfflineFilter);
    }
}
