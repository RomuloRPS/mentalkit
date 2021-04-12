import { Injector, Injectable } from '@angular/core';
import { DepartmentOfflineFilter } from './department.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class DepartmentOffline extends BaseOffline {
    protected name = 'department';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(DepartmentOfflineFilter);
    }
}
