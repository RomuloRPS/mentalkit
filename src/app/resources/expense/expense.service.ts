import { Injectable, Injector } from '@angular/core';
import { ExpenseHttp } from './expense.http';
import { BaseResourceService } from '../base-resource.service';

@Injectable()
export class ExpenseService extends BaseResourceService {
    public httpService: ExpenseHttp;

    public constructor(injector: Injector) {
        super(injector);

        this.httpService = injector.get(ExpenseHttp);
    }

    public delete(ids) {
        return this.httpService.delete(ids).toPromise();
    }
}
