import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';
import { MenuModel } from '../menu/menu.model';

@Injectable({
    providedIn: 'root'
})

export class RoleModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/roles";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public menus() {
       return this.hasMany(MenuModel, 'menus');
   }
}
