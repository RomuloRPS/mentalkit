import { Injectable } from '@angular/core';
import { BaseModel } from './base.model';

@Injectable()
export class RouteModel extends BaseModel {
	protected storageName = "route";

	private id;
	private name;
}
