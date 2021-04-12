import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { AvatarModel } from '../avatar/avatar.model';
import { BaseModel } from '../coloquent.model';
import { RoleModel } from '../role/role.model';
import { UserResourceModel } from '../user/user.model';

@Injectable({
    providedIn: 'root'
})

export class CategoryModel extends BaseModel {
   protected jsonApiType = "categories";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
