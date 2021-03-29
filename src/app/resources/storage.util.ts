import { Injectable } from '@angular/core';
import { NgForage } from 'ngforage';
import { Observable } from 'rxjs';

@Injectable()
export class StorageUtil {
    public constructor(private localForage: NgForage) { }

    public setObject(name: string, object: any) {
        localStorage.setItem(name, JSON.stringify(object));
    }

    public getObject(name: string) {
        const item = localStorage.getItem(name);

        if (item) {
            return JSON.parse(item);
        } else {
            return item;
        }
    }

    public setItem<T>(key: string, value: T) {
        return new Observable((observer) => {
            this.localForage.setItem(key, value).then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
    }

    public getItem(key: string) {
        return new Observable((observer) => {
            this.localForage.getItem(key).then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
    }

    // public removeItem(key: string){
    //     return new Observable((observer) => {
    //         this.localForage.removeItem(key).then((res) => {
    //             observer.next(res);
    //             observer.complete();
    //         });
    //     });
    // }
}
