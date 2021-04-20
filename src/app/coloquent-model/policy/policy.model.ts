import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { CategoryModel } from '../category/category.model';
import { BaseModel } from '../coloquent.model';
import { RequiredFieldModel } from '../required-field/required-field.model';
import { RoleModel } from '../role/role.model';
import { UserResourceModel } from '../user/user.model';

@Injectable({
    providedIn: 'root'
})

export class PolicyModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/policies";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }

   public categories() {
       return this.hasMany(CategoryModel, 'categories');
   }

   public requiredFields() {
       return this.hasOne(RequiredFieldModel, 'requiredFields');
   }
}
