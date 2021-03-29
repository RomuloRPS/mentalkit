import { Injectable } from '@angular/core';
import { BaseModel } from './base.model';

@Injectable()
export class UserModel extends BaseModel {
	protected storageName = "user";

	private id;
	private name;
	private email;
	private username;
	private JWT;
}
