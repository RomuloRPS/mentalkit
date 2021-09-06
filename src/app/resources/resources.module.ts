import { BaseResourceHttp } from './base-resource.http';
import { NgModule } from '@angular/core';
import { BaseOffline } from './base.offline';
import { StorageUtil } from './storage.util';
import { GenericCollectionModel } from './generic-collection.model';
import { HttpUtil } from './http.util';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ExpenseModule } from './expense/expense.module';
import { CategoryModule } from './category/category.module';
import { DepartmentModule } from './department/department.module';
import { CostCenterModule } from './cost-center/cost-center.module';
import { ExpenseReportModule } from './expense-report/expense-report.module';
import { PolicyModule } from './policy/policy.module';
import { CurrencyModule } from './currency/currency.module';

@NgModule({
    declarations: [],
    entryComponents: [],
    imports: [
        UserModule,
        RoleModule,
        ExpenseModule,
        CategoryModule,
        DepartmentModule,
        CostCenterModule,
        ExpenseReportModule,
        PolicyModule,
        CurrencyModule
    ],
    providers: [
        StorageUtil,
        GenericCollectionModel,
        HttpUtil
    ],
    exports: [
    ],
    bootstrap: []
})
export class ResourcesModule { }
