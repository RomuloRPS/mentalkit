import { NgModule } from '@angular/core';
import { CostCenterOfflineFilter } from './cost-center.offline.filter';
import { CostCenterOffline } from './cost-center.offline';
import { CostCenterService } from './cost-center.service';
import { CostCenterHttp } from './cost-center.http';

@NgModule({
    providers: [
        CostCenterHttp,
        CostCenterService,
        CostCenterOffline,
        CostCenterOfflineFilter
    ]
})
export class  CostCenterModule { }
