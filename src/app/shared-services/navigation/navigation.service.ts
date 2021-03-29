import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
    public forceOffline;

    public slowConnection = false;

    public constructor() {
    }

    public isForced() {
        return this.forceOffline;
    }

    public isOnline() {
        return (!this.forceOffline && window.navigator.onLine);
    }

    public isSlowConnection() {
        return this.slowConnection;
    }

    public setOffline() {
        this.forceOffline = true;
    }

    public setOnline() {
        this.slowConnection = false;
        this.forceOffline = false;
    }

    public setSlowConnection() {
        this.slowConnection = true;
    }
}
