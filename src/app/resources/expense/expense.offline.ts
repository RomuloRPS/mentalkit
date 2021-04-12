import { Injector, Injectable } from '@angular/core';
import { ExpenseOfflineFilter } from './expense.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class ExpenseOffline extends BaseOffline {
    protected name = 'expense';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(ExpenseOfflineFilter);
    }
}
