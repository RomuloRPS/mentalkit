import { Injectable, Injector } from '@angular/core';
import { RoleOffline } from './role.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class RoleHttp extends BaseResourceHttp {
  protected resourceUrl = 'roles';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(RoleOffline);
  }
}
