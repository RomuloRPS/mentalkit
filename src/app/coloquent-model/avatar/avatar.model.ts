import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { BaseModel } from '../coloquent.model';

@Injectable({
    providedIn: 'root'
})

export class AvatarModel extends BaseModel {
   protected jsonApiType = "avatar";

   public constructor() {
       super();
   }
}
