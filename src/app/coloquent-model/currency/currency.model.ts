import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class CurrencyModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/currencies";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }
}
