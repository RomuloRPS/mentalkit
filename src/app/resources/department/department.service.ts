import { Injectable, Injector } from '@angular/core';
import { DepartmentHttp } from './department.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class DepartmentService extends BaseResourceService {
    public httpService: DepartmentHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(DepartmentHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
