import { Injector, Injectable } from '@angular/core';
import { CategoryOfflineFilter } from './category.offline.filter';
import { BaseOffline } from '../base.offline';

@Injectable()
export class CategoryOffline extends BaseOffline {
    protected name = 'category';

    public constructor(injector: Injector) {
        super(injector);

        this.offlineFilter = injector.get(CategoryOfflineFilter);
    }
}
