import { Injectable, Injector } from '@angular/core';
import { CostCenterOffline } from './cost-center.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class CostCenterHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/cost-centers';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(CostCenterOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }

  public cache() {
      return super.cache(
          {
              page: {limit: 99999}
          }
      );
  }
}
