import { Injectable, Injector } from '@angular/core';
import { UserHttp } from './user.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class UserService extends BaseResourceService {
    public httpService: UserHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(UserHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
