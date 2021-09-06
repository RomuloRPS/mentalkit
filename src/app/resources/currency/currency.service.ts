import { Injectable, Injector } from '@angular/core';
import { CurrencyHttp } from './currency.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class CurrencyService extends BaseResourceService {
    public httpService: CurrencyHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(CurrencyHttp);
    }
}
