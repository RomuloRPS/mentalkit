import { Injectable, Injector } from '@angular/core';
import { CostCenterHttp } from './cost-center.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class CostCenterService extends BaseResourceService {
    public httpService: CostCenterHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(CostCenterHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
