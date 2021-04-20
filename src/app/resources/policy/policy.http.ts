import { Injectable, Injector } from '@angular/core';
import { PolicyOffline } from './policy.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class PolicyHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/policies';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(PolicyOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
