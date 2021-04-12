import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { CategoryModel } from '../category/category.model';
import { BaseModel } from '../coloquent.model';
import { DepartmentModel } from '../department/department.model';
import { ExpenseReportModel } from '../expense-report/expense-report.model';
import { RoleModel } from '../role/role.model';
import { UserResourceModel } from '../user/user.model';

@Injectable({
    providedIn: 'root'
})

export class ExpenseModel extends BaseModel {
   protected jsonApiType = "expenses";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }

   public user() {
       return this.hasOne(UserResourceModel, 'user');
   }

   public avatar() {
       return this.hasOne(AvatarModel, 'avatar');
   }

   public expenseReport() {
       return this.hasOne(ExpenseReportModel, 'expenseReport');
   }

   public category() {
       return this.hasOne(CategoryModel, 'category');
   }

   public department() {
       return this.hasOne(DepartmentModel, 'department');
   }

   public disapprovedExpense() {
       return this.hasOne(ExpenseModel, 'disapprovedExpense');
   }

   public policy() {
       return this.hasOne(DepartmentModel, 'policy');
   }
}
