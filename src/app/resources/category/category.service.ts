import { Injectable, Injector } from '@angular/core';
import { CategoryHttp } from './category.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class CategoryService extends BaseResourceService {
    public httpService: CategoryHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(CategoryHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
