import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';
import { MenuModel } from '../menu/menu.model';

@Injectable({
    providedIn: 'root'
})

export class RoleModel extends BaseModel {
   protected jsonApiType = "roles";

   public constructor() {
       super();
   }

   public menus() {
       return this.hasMany(MenuModel, 'menus');
   }
}
