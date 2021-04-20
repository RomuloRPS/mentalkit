import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class AvatarModel extends BaseModel {
   protected jsonApiType = "tenancies/:tenancy_id/avatar";

   public constructor() {
       super();
       this.jsonApiType = this.bindUrlForTenancy(this.jsonApiType);
   }
}
