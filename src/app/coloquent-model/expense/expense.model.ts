import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { StandardCategoryTranslatePipe } from 'src/app/pipes/standard-category-translate.pipe';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { CategoryModel } from '../category/category.model';
import { BaseModel } from '../coloquent.model';
import { CurrencyModel } from '../currency/currency.model';
import { DepartmentModel } from '../department/department.model';
import { ExpenseReportModel } from '../expense-report/expense-report.model';
import { RoleModel } from '../role/role.model';
import { UserResourceModel } from '../user/user.model';

@Injectable({
    providedIn: 'root'
})

export class ExpenseModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/expenses";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
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

   public currency() {
       return this.hasOne(CurrencyModel, 'currency');
   }

   public expenseHasWrongCategory(expenseResource: ExpenseModel, expenseReportResource: ExpenseReportModel) {
       if (expenseResource.getRelation('category')) {
           const categoryId = expenseResource.getRelation('category').getApiId();

           if (expenseResource && expenseReportResource && expenseReportResource.getRelation('policy') && expenseReportResource.getRelation('policy').getRelation('categories') && expenseResource.getRelation('category')) {
               const allowedCategoryIds = expenseReportResource.getRelation('policy').getRelation('categories').map((categoryResource: CategoryModel) => categoryResource.getApiId());

               if (!allowedCategoryIds.includes(categoryId)) {
                   return expenseReportResource.getRelation('policy').getRelation('categories')
                       .map((categoryResource: CategoryModel) => new StandardCategoryTranslatePipe().transform(categoryResource))
                       .join(', ');
               }

               return;
           }
       }
   }
}
