import { Injectable, Injector } from '@angular/core';
import { DepartmentOffline } from './department.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class DepartmentHttp extends BaseResourceHttp {
  protected resourceUrl = 'departments';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(DepartmentOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
