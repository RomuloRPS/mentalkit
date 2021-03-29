import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class MenuModel extends BaseModel {
   protected jsonApiType = "menus";

   public constructor() {
       super();
   }

   public getJsonApiBaseUrl(): string {
       return '';
   }
}
