import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class DepartmentModel extends BaseModel {
   protected jsonApiType = "departments";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }
}
