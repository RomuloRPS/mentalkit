import { Injectable } from '@angular/core';
import { Model } from 'coloquent';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../services/http/http-client.service';

@Injectable({
    providedIn: 'root'
})

export abstract class BaseModel extends Model {
   public static httpClientService: HttpClientService;

   protected jsonApiType = "";

   public constructor() {
       super();
       this.initHttpApi();
   }

   public static getHttpClient() {
       if (!this.httpClientService) {
           this.httpClientService = new HttpClientService();
       }

       return this.httpClientService;
   }

   public get elements() {
       return this['attributes'].data;
   }

   public set elements(elements) {
       this['attributes'].data = elements;
   }

   public get elementRelations() {
       return this['relations'].data;
   }

   public save() {
       return super.save();
   }

   public bindAttributes(attributes) {
       this.elements = attributes;

       return this;
   }

   public getJsonApiBaseUrl() {
       return environment.api;
   }

   public setRelation(relationName: string, value: any) {
       super.setRelation(relationName, value);
   }

   public getAttribute(attribute: string) {
       return this.getAttributes()[attribute];
   }

   public setAttribute(attribute, value) {
       return super.setAttribute(attribute, value);
   }

   public getRelation(relationName: string) {
       return super.getRelation(relationName);
   }

   protected action(action: string, data = {}) {
       if (this.getApiId()) {
           let uri = this.getJsonApiType() + '/' + this.getApiId() + '/' + action;

           return Model.getHttpClient().patch(uri, data);
       } else {
           throw new Error('ApiId must to be present to execute action');
       }
   }

   private initHttpApi() {
       BaseModel.getHttpClient();
       BaseModel.httpClientService.setBaseUrl(this.getJsonApiBaseUrl());
       BaseModel['httpClient'] = BaseModel.httpClientService;
       Model['httpClient'] = BaseModel.httpClientService;
   }
}
