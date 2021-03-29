import { Observable, Observer } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export abstract class BaseOfflineFilter {
    public constructor(private injector: Injector) {

    }

    public abstract apply(filters, data): Observable<any>;
}
