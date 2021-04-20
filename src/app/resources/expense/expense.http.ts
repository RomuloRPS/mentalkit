import { Injectable, Injector } from '@angular/core';
import { ExpenseOffline } from './expense.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class ExpenseHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/expenses';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(ExpenseOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
