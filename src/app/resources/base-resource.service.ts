import { Injector, EventEmitter } from '@angular/core';
import { BaseResourceHttp } from './base-resource.http';
import { Observable, Observer } from 'rxjs';

export abstract class BaseResourceService {
    public errorOcurred: EventEmitter<string> = new EventEmitter();

    protected httpService: BaseResourceHttp;
    protected errors = [];

    public constructor(injector: Injector) {
    }

    public get(data?) {
        const req = this.httpService.get(data);

        return req;
    }

    public getById(id, data?) {
        const req = this.httpService.getById(id, data);

        return req;
    }

    public first(data?) {
        const req = this.httpService.get(data).map((response) => response.data[0]);

        return req;
    }

    public cache(filter?) {
        return this.httpService.cache(filter);
    }

    public onlyOffline(isOnlyOffline = true) {
        this.httpService.setOnlyOffline(true);

        return this;
    }

    public store(data) {
        const req = this.httpService.store(data);

        return req;
    }

    // update(data) {
    //     let req = this.httpService.update(data);
    //     return req;
    // }

    // destroy(data) {
    //     let req = this.httpService.destroy(data);
    //     return req;
    // }
}
