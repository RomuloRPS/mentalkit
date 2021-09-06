import { Injector, Injectable } from '@angular/core';
import { CurrencyOfflineFilter } from './currency.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class CurrencyOffline extends BaseOffline {
    protected name = 'currency';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(CurrencyOfflineFilter);
    }
}
