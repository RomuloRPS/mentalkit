import { Injectable, Injector } from '@angular/core';
import { forkJoin, Observable, Observer } from 'rxjs';
import { BaseResourceService } from 'src/app/resources/base-resource.service';
import { RouteModel } from '../models/route.model';
import { UserModel } from '../models/user.model';
import { CategoryService } from '../resources/category/category.service';
import { CostCenterService } from '../resources/cost-center/cost-center.service';
import { DepartmentService } from '../resources/department/department.service';
import { ExpenseReportRelations } from '../resources/expense-report/expense-report-relations';
import { ExpenseReportService } from '../resources/expense-report/expense-report.service';
import { ExpenseRelations } from '../resources/expense/expense-relations';
import { ExpenseService } from '../resources/expense/expense.service';
import { PolicyService } from '../resources/policy/policy.service';
import { RoleService } from '../resources/role/role.service';
import { UserRelations } from '../resources/user/user-relations';
import { UserService } from '../resources/user/user.service';

@Injectable()
export class OfflineCacheService {
    private userModel: UserModel;
    private userService: UserService;
    private roleService: RoleService;
    private expenseService: ExpenseService;
    private expenseReportService: ExpenseReportService;
    private categoryService: CategoryService;
    private departmentService: DepartmentService;
    private costCenterService: CostCenterService;
    private policyService: PolicyService;

    public constructor(injector: Injector) {
        this.userModel = injector.get(UserModel);
        this.userService = injector.get(UserService);
        this.roleService = injector.get(RoleService);
        this.expenseService = injector.get(ExpenseService);
        this.expenseReportService = injector.get(ExpenseReportService);
        this.categoryService = injector.get(CategoryService);
        this.departmentService = injector.get(DepartmentService);
        this.costCenterService = injector.get(CostCenterService);
        this.policyService = injector.get(PolicyService);
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
            this.categoryService.cache({
                page: {limit: 99999}
            }),
            this.costCenterService.cache({
                page: {limit: 99999}
            }),
            this.departmentService.cache({
                page: {limit: 99999}
            }),
            this.expenseService.cache({
                include: ExpenseRelations,
                page: {limit: 99999}
            }),
            this.expenseReportService.cache({
                include: ExpenseReportRelations,
                page: {limit: 99999}
            }),
            this.policyService.cache({
                page: {limit: 99999}
            }),
        );

        return localEnabledServices;
    }
}
