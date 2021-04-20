import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class DepartmentModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/departments";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
