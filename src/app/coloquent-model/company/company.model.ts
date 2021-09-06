import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';
import { CurrencyModel } from '../currency/currency.model';

@Injectable({
    providedIn: 'root'
})

export class CompanyModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/company";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public static getStandardCurrency() {
       return localStorage.getItem('standardCurrencyCode');
   }

   public static updateStandardCurrencyCode(currencyCode: string) {
       localStorage.setItem('standardCurrencyCode', currencyCode);
   }

   public currencies() {
       return this.hasMany(CurrencyModel, 'currencies');
   }
}
