import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { BaseModel } from '../coloquent.model';
import { CostCenterModel } from '../cost-center/cost-center.model';
import { DepartmentModel } from '../department/department.model';
import { RoleModel } from '../role/role.model';
import { TenancyModel } from '../tenancy/tenancy.model';

@Injectable({
    providedIn: 'root'
})

export class UserResourceModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/users";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }

   public updatePassword(password) {
       return this.action('update-password', password);
   }

   public roles() {
       return this.hasMany(RoleModel, 'role');
   }

   public department() {
       return this.hasOne(DepartmentModel, 'department');
   }

   public costCenter() {
       return this.hasOne(CostCenterModel, 'centerCost');
   }

   public tenancies() {
       return this.hasMany(TenancyModel, 'tenancies');
   }

   public avatar() {
       return this.hasOne(AvatarModel, 'avatar');
   }
}
