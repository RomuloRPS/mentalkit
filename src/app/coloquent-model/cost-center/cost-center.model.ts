import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class CostCenterModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/cost-centers";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
