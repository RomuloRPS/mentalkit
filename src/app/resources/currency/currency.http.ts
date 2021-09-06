import { Injectable, Injector } from '@angular/core';
import { CurrencyOffline } from './currency.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class CurrencyHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/currencies';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(CurrencyOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
