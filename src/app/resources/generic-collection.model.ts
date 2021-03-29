import { Injectable } from '@angular/core';

import { StorageUtil } from './storage.util';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export class StoredCollection {
    public data: any = [];
    public included: any = [];
    public meta: any = [];
}

@Injectable()

export class GenericCollectionModel {
    private data: any = [];
    private included: any = [];
    private meta: any = [];
    public constructor(
        private storageUtil: StorageUtil,
        private userModel: UserModel
    ) { }

    public set(key, value) {
        if (key === 'included') {
            this.included = value;
        } else if (key === 'meta') {
            this.meta = value;
        } else {
            this.data = value;
        }

        return this;
    }

    public save(storageName) {
        const collectionToStore = new StoredCollection();

        collectionToStore.data = this.data;
        collectionToStore.included = this.included;
        collectionToStore.meta = this.meta;

        return this.storageUtil.setItem(
            this.getStorageName(storageName),
            collectionToStore
        );
    }

    public load(storageName) {
        return new Observable((observer) => {
            this.storageUtil.getItem(this.getStorageName(storageName)).forEach((storedCollection: StoredCollection) => {
                storedCollection = storedCollection ? storedCollection : new StoredCollection();
                this.data = storedCollection.data ? storedCollection.data : [];
                this.included = storedCollection.included ? storedCollection.included : [];
                this.meta = storedCollection.meta ? storedCollection.meta : [];
                observer.next(storedCollection);
                observer.complete();
            });
        });
    }

    public clear(storageName) {
        this.data = [];
        this.included = [];
        this.meta = [];

        return this.save(this.getStorageName(storageName));
    }

    public getStorageName(suffix) {
        this.userModel.load();

        const username = this.userModel.get('username');

        if (!username) {
            throw new Error('It is only possible work offline request to a user who has a username');
        }

        return username + '_' + suffix;
    }
}
