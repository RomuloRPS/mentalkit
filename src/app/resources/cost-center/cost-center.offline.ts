import { Injector, Injectable } from '@angular/core';
import { CostCenterOfflineFilter } from './cost-center.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class CostCenterOffline extends BaseOffline {
    protected name = 'cost-center';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(CostCenterOfflineFilter);
    }
}
