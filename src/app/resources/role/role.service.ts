import { Injectable, Injector } from '@angular/core';
import { RoleHttp } from './role.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class RoleService extends BaseResourceService {
    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(RoleHttp);
    }
}
