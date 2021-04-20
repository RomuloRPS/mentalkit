import { Injectable, Injector } from '@angular/core';
import { UserOffline } from './user.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class UserHttp extends BaseResourceHttp {
  protected resourceUrl = 'tenancies/:tenancy_id/users';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(UserOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
