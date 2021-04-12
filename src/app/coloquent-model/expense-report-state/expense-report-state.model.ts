import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { BaseModel } from '../coloquent.model';
import { CostCenterModel } from '../cost-center/cost-center.model';
import { DepartmentModel } from '../department/department.model';
import { ExpenseModel } from '../expense/expense.model';
import { PolicyModel } from '../policy/policy.model';
import { RoleModel } from '../role/role.model';

@Injectable({
    providedIn: 'root'
})

export class ExpenseReportStateModel extends BaseModel {
   protected jsonApiType = "expense-report-state";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
