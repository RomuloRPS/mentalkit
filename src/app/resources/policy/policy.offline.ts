import { Injector, Injectable } from '@angular/core';
import { PolicyOfflineFilter } from './policy.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class PolicyOffline extends BaseOffline {
    protected name = 'policy';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(PolicyOfflineFilter);
    }
}
