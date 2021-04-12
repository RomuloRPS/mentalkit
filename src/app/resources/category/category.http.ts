import { Injectable, Injector } from '@angular/core';
import { CategoryOffline } from './category.offline';
import { BaseResourceHttp } from '../base-resource.http';

@Injectable()
export class CategoryHttp extends BaseResourceHttp {
  protected resourceUrl = 'categories';

  public constructor(injector: Injector) {
      super(injector);
      this.offlineResource = injector.get(CategoryOffline);
  }

  public delete(ids) {
      const url = this.bindParams(this.resourceUrl);

      return this.api.delete(this.apiUrl + '/' + url + '/' + ids.toString());
  }
}
