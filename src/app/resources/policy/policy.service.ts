import { Injectable, Injector } from '@angular/core';
import { PolicyHttp } from './policy.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class PolicyService extends BaseResourceService {
    public httpService: PolicyHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(PolicyHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
