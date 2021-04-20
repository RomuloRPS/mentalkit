import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';
import { MenuModel } from '../menu/menu.model';

@Injectable({
    providedIn: 'root'
})

export class TenancyModel extends BaseModel {
   protected jsonApiType = "tenancies";

   public constructor() {
       super();
   }
}
