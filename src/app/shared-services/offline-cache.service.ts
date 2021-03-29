import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable, Observer } from 'rxjs';
import { BaseResourceService } from 'src/app/resources/base-resource.service';
import { RouteModel } from '../models/route.model';
import { UserModel } from '../models/user.model';
import { RoleService } from '../resources/role/role.service';
import { UserRelations } from '../resources/user/user-relations';
import { UserService } from '../resources/user/user.service';

@Injectable()
export class OfflineCacheService {
    private userModel: UserModel;
    private userService: UserService;
    private roleService: RoleService;

    public constructor(injector: Injector) {
        this.userModel = injector.get(UserModel);
        this.userService = injector.get(UserService);
        this.roleService = injector.get(RoleService);
    }

    public cacheInfo() {
        let cachingData = true;

        return new Observable((observer: Observer<any>) => {
            const enabledServices = this.getEnabledServices();

            if (enabledServices.length > 0) {
                forkJoin(enabledServices).toPromise().then((response) => {
                    localStorage.setItem('finishedTasks', JSON.stringify([]));
                    cachingData = false;
                    observer.next(response);
                    observer.complete();
                }).catch((error) => {
                    observer.error(error);
                    observer.complete();
                    console.log(error);
                });
            }
        });
    }

    public cacheOneService(service: BaseResourceService, filter = {}) {
        return service.cache(filter).toPromise();
    }

    public cacheOneServiceIncluded(service: BaseResourceService, include, filter = {}, sort?) {
        return service.cache({include: include, page: {limit: 99999}, filter: filter, sort}).toPromise();
    }

    public getEnabledServices() {
        const localEnabledServices = [];

        localEnabledServices.push(
            this.userService.cache({
                include: UserRelations,
                page: {limit: 99999}
            }),
            this.roleService.cache({
                page: {limit: 99999}
            }),
        );

        return localEnabledServices;
    }
}
