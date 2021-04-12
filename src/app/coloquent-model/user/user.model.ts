import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { BaseModel } from '../coloquent.model';
import { CostCenterModel } from '../cost-center/cost-center.model';
import { DepartmentModel } from '../department/department.model';
import { RoleModel } from '../role/role.model';

@Injectable({
    providedIn: 'root'
})

export class UserResourceModel extends BaseModel {
   protected jsonApiType = "users";

   public constructor() {
       super();
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

   public avatar() {
       return this.hasOne(AvatarModel, 'avatar');
   }
}
