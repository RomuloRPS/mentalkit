import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { BaseModel } from '../coloquent.model';
import { CostCenterModel } from '../cost-center/cost-center.model';
import { DepartmentModel } from '../department/department.model';
import { ExpenseReportStateModel } from '../expense-report-state/expense-report-state.model';
import { ExpenseModel } from '../expense/expense.model';
import { PolicyModel } from '../policy/policy.model';
import { RoleModel } from '../role/role.model';

export enum ExpenseReportStatusEnum {
    OPEN = "OPEN",
    SENT = "SENT",
    VISUALIZED = "VISUALIZED",
    IN_APPROVING_PROCESS = "IN_APPROVING_PROCESS",
    EDITION_REQUEST = "EDITION_REQUEST",
    APPROVED = "APPROVED",
    APPROVED_WITH_EXCEPTIONS = "APPROVED_WITH_EXCEPTIONS",
    PAID = "PAID",
    CONFLICT = "CONFLICT"
}

export const statusBadgeColors = {
    [ExpenseReportStatusEnum.OPEN]: 'bg-blue-500',
    [ExpenseReportStatusEnum.SENT]: 'bg-ultramarine-500',
    [ExpenseReportStatusEnum.CONFLICT]: 'bg-red-500',
    [ExpenseReportStatusEnum.PAID]: 'bg-yellow-500',
    [ExpenseReportStatusEnum.APPROVED]: 'bg-green-500',
    [ExpenseReportStatusEnum.VISUALIZED]: 'bg-gray-500',
    [ExpenseReportStatusEnum.EDITION_REQUEST]: 'bg-orange-500',
    [ExpenseReportStatusEnum.IN_APPROVING_PROCESS]: 'bg-gray-700',
    [ExpenseReportStatusEnum.APPROVED_WITH_EXCEPTIONS]: 'bg-red-700',
};

@Injectable({
    providedIn: 'root'
})

export class ExpenseReportModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/expense-reports";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }

   public getStatusBadgeColor() {
       switch (this.getAttribute('status')) {
           case ExpenseReportStatusEnum.APPROVED:
               return 'success';
           case ExpenseReportStatusEnum.APPROVED_WITH_EXCEPTIONS:
               return 'danger';
           case ExpenseReportStatusEnum.EDITION_REQUEST:
               return 'warning';
           case ExpenseReportStatusEnum.IN_APPROVING_PROCESS:
               return 'medium';
           case ExpenseReportStatusEnum.OPEN:
               return 'primary';
           case ExpenseReportStatusEnum.PAID:
               return 'warning';
           case ExpenseReportStatusEnum.SENT:
               return 'primary';
           case ExpenseReportStatusEnum.VISUALIZED:
               return 'light';
       }
   }

   public roles() {
       return this.hasMany(RoleModel, 'role');
   }

   public avatar() {
       return this.hasOne(AvatarModel, 'avatar');
   }

   public department() {
       return this.hasOne(DepartmentModel, 'department');
   }

   public costCenter() {
       return this.hasOne(CostCenterModel, 'costCenter');
   }

   public policy() {
       return this.hasOne(PolicyModel, 'policy');
   }

   public currentExpenseReportState() {
       return this.hasOne(ExpenseReportStateModel, 'currentExpenseReportState');
   }

   public expenses() {
       return this.hasMany(ExpenseModel, 'expenses');
   }
}
