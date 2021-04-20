import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class MenuModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/menus";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl(): string {
       return '';
   }
}
