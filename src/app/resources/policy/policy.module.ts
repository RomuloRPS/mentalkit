import { NgModule } from '@angular/core';
import { PolicyOfflineFilter } from './policy.offline.filter';
import { PolicyOffline } from './policy.offline';
import { PolicyService } from './policy.service';
import { PolicyHttp } from './policy.http';

@NgModule({
    providers: [
        PolicyHttp,
        PolicyService,
        PolicyOffline,
        PolicyOfflineFilter
    ]
})
export class  PolicyModule { }
