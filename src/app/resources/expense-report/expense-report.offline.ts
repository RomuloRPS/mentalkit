import { Injector, Injectable } from '@angular/core';
import { ExpenseReportOfflineFilter } from './expense-report.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class ExpenseReportOffline extends BaseOffline {
    protected name = 'expense-report';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(ExpenseReportOfflineFilter);
    }
}
