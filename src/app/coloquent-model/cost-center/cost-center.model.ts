import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class CostCenterModel extends BaseModel {
   protected jsonApiType = "cost-centers";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
