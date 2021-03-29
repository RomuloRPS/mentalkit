import { Injectable } from '@angular/core';
import { StorageUtil } from '../resources/storage.util';

@Injectable()
export class BaseModel {
	protected storageName;
	protected ignoreSerialize = ['storageName', 'ignoreSerialize', 'storageUtil', 'store', 'storeModelService', 'storageServiceInject'];

	public constructor(private storageUtil: StorageUtil) { }

	public load() {
	    let obj = JSON.parse(localStorage.getItem(this.storageName));

	    if (typeof obj == 'object') {
	        for (let prop in obj) {
	            if (this.ignoreSerialize.indexOf(prop) != -1) {
	                continue;
	            }

	            this[prop] = obj[prop];
	        }
	    }

	    return this;
	}

	public clear() {
	    let obj = this.load();

	    if (typeof obj == 'object') {
	        for (let prop in obj) {
	            if (this.ignoreSerialize.indexOf(prop) != -1) {
	                continue;
	            }

	            delete this[prop];
	            this[prop] = this.get(prop);
	        }

	        this.save();
	    }

	    this.save();

	    return this;
	}

	public save() {
	    let obj: any = {};

	    if (typeof this == 'object') {
	        for (let prop in this) {
	            if (this.ignoreSerialize.indexOf(prop) != -1) {
	                continue;
	            }

	            obj[prop] = this[prop];
	        }
	    }

	    return localStorage.setItem(this.storageName, JSON.stringify(obj));
	}

	public get(name) {
	    if (typeof this[this.snakeToCamel("get_" + name)] == "function") {
	        return this[this.snakeToCamel("get_" + name)]();
	    } else {
	        return this[name];
	    }
	}

	public set(name, value) {
	    this[name] = (typeof value == 'undefined' ? null : value);

	    return this;
	}

	protected nvl(value, defaultValue) {
	    return value ? value : defaultValue;
	}

	protected randName(prefix = '') {
	    this.storageName = prefix + Date.now() + Math.random();
	}

	private snakeToCamel(s) {
	    return s.replace(/(\_\w)/g, function (m) {
	        return m[1].toUpperCase();
	    });
	}
}
